"use client"
import React from 'react';
import SectionHeading from "@/components/sectionHeading";
import {FaPaperPlane} from "react-icons/fa";
import { motion } from 'framer-motion';
import {useObservedSection} from "@/lib/customHooks";

export default function Contact() {
    const {ref} = useObservedSection("Contact", 0.75);

    return (
        <motion.section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)]" ref={ref}>
           <SectionHeading>Contact me: </SectionHeading>

            <p>
                Please contact me via email at {" "}
                <a className="Underline" href="mailto:dr.wheats@gmail.com">dr.wheats@gmail.com</a>{" "}
                or through this form.
            </p>

            <form>
                <input type="email"/>
                <textarea />
                <button type="submit">Submit <FaPaperPlane /></button>
            </form>
        </motion.section>
    )
}