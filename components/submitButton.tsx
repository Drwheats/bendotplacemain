import React from "react";
import {FaPaperPlane} from "react-icons/fa";
import {useFormStatus} from "react-dom";

export default function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button disabled={pending} type="submit" className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all disabled:bg-opacity-65 disabled:scale-100
                focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 ">Submit{pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>) : (
            <div>
                <FaPaperPlane
                    className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:translate-y-1"/>
            </div>)
        }</button>)


}
