"use client"
import React from 'react';
import SectionHeading from "@/components/sectionHeading";
import { motion } from 'framer-motion';
import {useObservedSection} from "@/lib/customHooks";
import { sendEmail } from "@/serverFunctions/sendEmail"
import { useFormStatus} from "react-dom"
import SubmitButton from "@/components/submitButton";

export default function Contact() {
    const {ref} = useObservedSection("Contact", 0.75);
    const {pending} = useFormStatus();

    return (
        <motion.section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center" ref={ref}
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        viewport={{
            once: true,
        }}><SectionHeading>Contact me: </SectionHeading>

            <p className="text-gray-700 -mt-6">
                Please contact me via email or through this form.

                {/*at {" "} <a className="Underline" href="mailto:dr.wheats@gmail.com">dr.wheats@gmail.com</a>{" "}*/}
            </p>

            <form className="mt-10 flex flex-col"
            action={ async (formData) => {
                await sendEmail(formData);
            }}>
                <input name="emailName" className=" group h-14 rounded-lg border border-black/10 p-4" type="email" placeholder="Your email" required maxLength={500}/>
                <textarea name="messageName" className={"h-52 my-3 rounded-lg borderBlack p-4 "} placeholder="Your message" required maxLength={5000}/>
                <SubmitButton />
            </form>
        </motion.section>
    )
}