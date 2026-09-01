"use server";

import { Resend } from "resend";
import {validateString} from "@/lib/utils";
import {getErrorMessage} from "@/lib/utils";
import ContactFormEmail from "@/emails/contactFormEmail"
import React from "react";

export const sendEmail = async (formData: FormData) => {
    const resendApiKey = process.env.RESEND_API_KEY;

    // Vercel provides this value at runtime from Project Settings → Environment Variables.
    // Keeping the check inside the action prevents a missing production variable from
    // crashing the page or exposing the key to the browser.
    if (!resendApiKey) {
        console.error("RESEND_API_KEY is not configured.");
        return {
            error: "The contact form is not configured yet.",
        };
    }

    const resend = new Resend(resendApiKey);
    const emailSender = formData.get("emailName");
    const message = formData.get("messageName");

    if (!validateString(emailSender, 500)) {
        console.log("you le fucked up!")

        return {
            error: "Please enter a valid email address",
        };
    }

    if (!validateString(message, 5000)) {
        console.log("you le fucked up!")
        return {
            error: "Please enter a valid message",
        };
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: 'dr.wheats@gmail.com',
            subject: "Contact Form Submission",
            reply_to: emailSender as string,
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                emailSender: emailSender as string,
            }),
        });
    }
catch (error: unknown) {
    return {
        error: getErrorMessage(error)
    }}
    return data;

}


export default sendEmail;
