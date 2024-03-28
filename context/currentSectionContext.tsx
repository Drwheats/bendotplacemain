"use client"
import React, {createContext, useContext, useState} from 'react';
import {navBarCategories} from "@/lib/data";
import {SectionName} from "@/lib/types";


type CurrentSectionContextProviderProps = {children: React.ReactNode}
type CurrentSectionContextType = {
    currentSection: SectionName;
    setCurrentSection: React.Dispatch<React.SetStateAction<SectionName>>
    lastClicked: number;
    setLastClicked: React.Dispatch<React.SetStateAction<number>>;
}
export const CurrentSectionContext = createContext<CurrentSectionContextType | null>(null);
export default function CurrentSectionContextProvider({ children } : CurrentSectionContextProviderProps) {
    const [currentSection, setCurrentSection] = useState<SectionName>("Home");
    const [lastClicked, setLastClicked] = useState(0)
    return (<CurrentSectionContext.Provider value={
        {
            currentSection, setCurrentSection, lastClicked, setLastClicked
        }
    }>
        {children}
    </CurrentSectionContext.Provider>);
};

export function useCurrentSectionContext() {
    const context = useContext(CurrentSectionContext);

    if (context === null) {
        throw new Error(
            "why are you accessing thishere lol"
        );
    }
    return context;
}
