import styled from "@emotion/styled";
import { AppBar, MenuItem, Toolbar } from "@mui/material";


const StyledToolbar = styled(Toolbar)(() => ({
    display: 'flex',
    justifyContent: 'space-evenly'
}));

const StyledLink = styled('a')(() => ({
    textDecoration: 'none',
    color: 'inherit',
    
}));

const eventSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault(); // impede o comportamento padrão do link
    const targetId = event.currentTarget.getAttribute("href")?.substring(1); // obtém o valor do atributo href e remove o '#' do href
    const targetElement = targetId ? document.getElementById(targetId) : null; // encontra o elemento alvo pelo ID
    if (targetElement) // se o elemento alvo existir, rola suavemente até ele
        {
        targetElement.scrollIntoView({ behavior: "smooth" }); //método para rolar suavemente até o elemento alvo
    }
};

export function NavBar() {
    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem>
                    <StyledLink href="#about" onClick={eventSmoothScroll}>Sobre</StyledLink>
                    </MenuItem>
                    <MenuItem>
                    <StyledLink href="#skills" onClick={eventSmoothScroll}>Skills</StyledLink>
                    </MenuItem>
                    <MenuItem>
                    <StyledLink href="#projects" onClick={eventSmoothScroll}>Projetos</StyledLink>
                    </MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}
