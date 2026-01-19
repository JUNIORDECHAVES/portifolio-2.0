import styled from "@emotion/styled";
import { theme } from "../../theme";
import type { ReactNode } from "react";


const StyledButton = styled('button')(() => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main

    }
}));

type StyleButtonProps = {
    children: ReactNode;
    onclick: () => void
}

export function StyleButton({ children, onclick }: StyleButtonProps) {
    return (
        <StyledButton onClick={onclick}>
            {children}
        </StyledButton>
    )
}