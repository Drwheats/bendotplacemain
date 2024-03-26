import {useInView} from "react-intersection-observer";
import {useCurrentSectionContext} from "@/context/currentSectionContext";
import {useEffect} from "react";

export function useObservedSection() {
    const {ref, inView} = useInView({
        threshold: 0.5,
    });
    const { setCurrentSection, lastClicked } = useCurrentSectionContext();

    useEffect(() => {
        if (inView && Date.now() - lastClicked > 1000) {
            setCurrentSection("About");
        }
    }, [inView, setCurrentSection, lastClicked]);
}