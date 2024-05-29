"use server";

import { Resend } from "@/node_modules/resend";
import {validateString} from "@/lib/utils";

const resend = new Resend(process.env.RESENT_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const name = formData.get("emailName");
    const message = formData.get("messageName");

    if (!validateString(name, 500)) {
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

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'dr.wheats@gmail.com',
        subject: name as string,
        reply_to: name as string,
        text: message as string,
    })
}

export default sendEmail;