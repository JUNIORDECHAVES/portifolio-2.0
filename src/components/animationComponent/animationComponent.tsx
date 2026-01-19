import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { useEffect, useRef, useState, type ReactNode } from "react"


const moveFromLeftToRight = keyframes`
0% {
    transform: translateX(-20vw);
    }
100% {
    transform: translateX(0);
    }
    `

const moveFromRightToLeft = keyframes`
0% {
    transform: translateX(20vw);
    }
100% {
    transform: translateX(0);
    }
    `
interface AnimationComponentProps {
    children: ReactNode,
    moveDirection: "left" | "right"
};
const StyledAnimationComponent = styled("div")<{ startAnimation: boolean, moveDirection: string }>(({ startAnimation, moveDirection }) => ({
    animation: startAnimation ? `${moveDirection} 1s linear` : "none"
}));
export function AnimationComponent({ children, moveDirection }: AnimationComponentProps) {

    const componentRef = useRef(null);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry =>{
                if (entry.isIntersecting) {
                    setStartAnimation(true);
                    observer.disconnect();
                }
            });
        });
        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            observer.disconnect();
        }
    }, []);

    return (
        <StyledAnimationComponent ref={componentRef} startAnimation={startAnimation} 
        moveDirection={moveDirection === "right" ? moveFromLeftToRight : moveFromRightToLeft}>
            {children}
        </StyledAnimationComponent>
    )
}