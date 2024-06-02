"use server";

import { Resend } from "@/node_modules/resend";
import {validateString} from "@/lib/utils";
import {getErrorMessage} from "@/lib/utils";
import ContactFormEmail from "@/emails/contactFormEmail"
import React from "react";
import {data} from "autoprefixer";

const resend = new Resend(process.env.RESENT_API_KEY);


export const sendEmail = async (formData: FormData) => {
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