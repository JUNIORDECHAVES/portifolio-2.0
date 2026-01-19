import { Box, Container, IconButton, Typography } from "@mui/material";
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export function Footer() {
    return (
        <Box pt={2} pb={2} >
            <Container maxWidth="lg">
                <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
                    <IconButton onClick={() => window.open("https://github.com/JUNIORDECHAVES")}>
                        <GithubIcon />
                    </IconButton>
                    <IconButton onClick={() => window.open("https://www.linkedin.com/in/junior-chaves-desenvolvedor/")}>
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton href="mailto:juniorchaves0010@gmail.com" target="_blank">
                        <EmailIcon />
                    </IconButton>
                </Box>
            </Container>
            <Typography textAlign={'center'}>© 2025 Júnior Chaves. All rights reserved.</Typography>
        </Box>
    )
}