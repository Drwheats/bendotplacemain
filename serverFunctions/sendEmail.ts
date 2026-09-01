"use server";

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import ContactFormEmail from "@/emails/contactFormEmail";
import React from "react";

export const sendEmail = async (formData: FormData) => {
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
        console.error("RESEND_API_KEY is not configured in the deployment environment.");
        return { error: "Contact form configuration is missing." };
    }

    const emailSender = formData.get("emailName");
    const message = formData.get("messageName");

    if (!validateString(emailSender, 500)) {
        return {
            error: "Please enter a valid email address",
        };
    }

    if (!validateString(message, 5000)) {
        return {
            error: "Please enter a valid message",
        };
    }
    try {
        const resend = new Resend(resendApiKey);
        const result = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'dr.wheats@gmail.com',
            subject: "Contact Form Submission",
            reply_to: emailSender as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                emailSender: emailSender as string,
            }),
        });
        if (result.error) {
            console.error("Resend rejected email:", result.error);
            return { error: result.error.message };
        }

        return { data: result.data };
    } catch (error: unknown) {
        console.error("Email send failed:", error);
        return { error: getErrorMessage(error) };
    }

}


export default sendEmail;
