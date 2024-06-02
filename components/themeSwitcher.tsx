"use client"

import React, {useEffect} from 'react';
import {TbMasksTheater} from "react-icons/tb";

type Theme = "light" | "dark";


export default function ThemeSwitcher(props) {

    return (
        <button className="fixed bottom-5 right-5 big-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2x1 rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-[105] transition-all dark:bg-gray-950"
        onClick={changeTheme}
        ><TbMasksTheater /></button>
    );
}

