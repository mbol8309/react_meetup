import { useEffect, useState } from "react"

const useScroll = (threshold = 100) => {

    const [scrollDirection, setScrollDirection] = useState(0)

    useEffect(() => {
        let previousYPosition = window.scrollY;

        const scrolledMoreThanThreshold = (currentScrollYPosition) =>
            Math.abs(currentScrollYPosition - previousYPosition) > threshold;

        const isScrollingUp = (currentScrollYPosition) =>
            currentScrollYPosition > previousYPosition &&
            !(previousYPosition > 0 && currentScrollYPosition === 0) &&
            !(currentScrollYPosition > 0 && previousYPosition === 0);

        const updateScrollDirection = () => {
            const currentYPosition = window.scrollY;

            if (scrolledMoreThanThreshold(currentYPosition)) {
                const scrollDirection = isScrollingUp(currentYPosition)
                    ? 1
                    : -1;

                setScrollDirection(scrollDirection);
                previousYPosition =
                    currentYPosition > 0 ? currentYPosition : 0;
            }
        };

        const onScroll = () => window.requestAnimationFrame(updateScrollDirection);
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);


    }, [threshold])


    return scrollDirection
}

export default useScroll