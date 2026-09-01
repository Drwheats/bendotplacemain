"use client"
import React from 'react';
import SectionHeading from "@/components/sectionHeading";
import { motion } from 'framer-motion';
import {useObservedSection} from "@/lib/customHooks";
import { sendEmail } from "@/serverFunctions/sendEmail"
import SubmitButton from "@/components/submitButton";
import toast from "react-hot-toast";

export default function Contact() {
    const {ref} = useObservedSection("Contact", 0.75);
    // const {pending} = useFormStatus();


    return (
        <motion.section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" ref={ref}
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 10
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true,
        }}><SectionHeading>Contact me: </SectionHeading>

            <p className="text-gray-700">
                Leave me a message with the form below :)
            </p>

            <form className="mt-10 flex flex-col"
            action={ async (formData) => {
                const {error} = await sendEmail(formData);
                if (error) {
                    console.log("Environment diagnostics:", {
    vercelEnv: process.env.VERCEL_ENV,
    hasResendKey: !!process.env.RESEND_API_KEY,
});
                    toast.error(error);
                    return;
                }
                toast.success("Email Sent Successfully!")
            }}
            >
                 <input name="emailName" className=" group h-14 rounded-lg border border-black/10 p-4 dark:text-black" type="email" placeholder="Your email" required maxLength={500}/>
                <textarea name="messageName" className={"h-52 my-3 rounded-lg borderBlack p-4 dark:text-black"} placeholder="Your message" required maxLength={5000}/>
                <SubmitButton />
            </form>
        </motion.section>
    )
}
