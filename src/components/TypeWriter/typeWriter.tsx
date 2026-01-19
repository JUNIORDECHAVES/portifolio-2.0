import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import { useEffect, useState } from "react";
type TypeWriterProps = {
    text: string;
    delay: number;
    variant?: TypographyProps['variant'];
    color?: string;
}

export function TypeWriter({ text, delay, variant, color }: TypeWriterProps) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeOut = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1 );
            }, delay);

            return () => clearTimeout(timeOut)
        }
    }, [currentIndex, text, delay]);

    return <Typography variant={variant} color={color} textAlign="center">{currentText}</Typography>;
    
}