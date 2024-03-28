import {useInView} from "react-intersection-observer";
import {useCurrentSectionContext} from "@/context/currentSectionContext";
import {useEffect} from "react";
import {SectionName} from "./types"

export function useObservedSection(sectionName: SectionName, threshold = 0.5, ) {
    const {ref, inView} = useInView({
        threshold,
    });
    const { setCurrentSection, lastClicked } = useCurrentSectionContext();

    useEffect(() => {
        if (inView && Date.now() - lastClicked > 1000) {
            setCurrentSection(sectionName);
        }
    }, [inView, setCurrentSection, lastClicked, sectionName]);
    return {
        ref,
    }
}