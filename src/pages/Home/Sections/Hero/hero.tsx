import styled from "@emotion/styled"
import Avata from '../../../../assets/images/avata.jpg'
import { Box, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { theme } from "../../../../theme";
import { StyleButton } from "../../../../components/styleButton/styleButton";
import { AnimationBackground } from "../../../../components/animatedBackground/animation";
import { TypeWriter } from "../../../../components/TypeWriter/typeWriter";



const StyledHero = styled('div')(() => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
        paddingTop: '100px'
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: '0'
    }
}));

const StyledImage = styled('img')(() => ({
    width: '75%',
    borderRadius: '50%',
    border: `2px solid ${theme.palette.primary.contrastText}`,
}));
export function Hero() {

    const handlerDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/files/JUNIOR_CHAVES_CV.pdf';
        link.download = 'JUNIOR_CHAVES_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handlerEmail = () => {
        const emailAddress = 'juniorchaves0010@gmail.com';
        const subject = 'Subject';
        const body = 'Olá! Eu olhei seu portfolio...';
        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg" >
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box position="relative">
                                <Box position="absolute" width={'150%'} top={-150} right={0} >
                                    <AnimationBackground />
                                </Box>
                                <Box position={'relative'} textAlign={'center'}>
                                    <StyledImage src={Avata} alt="foto de perfil" />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid size={{ xs: 12, md: 7 }}>
                            <Typography color="primary.contrastText" variant="h1" textAlign='center' pb={2} >Junior Chaves</Typography>
                            <TypeWriter text="I'm a software developer" delay={150} variant="h2" color="primary.contrastText" />

                            <Grid container display={'flex'} justifyContent={'center'} spacing={2} pt={3}>
                                <Grid size={{ xs: 12, md: 4 }} display={'flex'} justifyContent={'center'} >
                                    <StyleButton onclick={() => handlerDownloadCV()} >
                                        <DownloadIcon />
                                        <Typography >
                                            Download CV
                                        </Typography>
                                    </StyleButton>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display={'flex'} justifyContent={'center'} >
                                    <StyleButton onclick={() => handlerEmail()} >
                                        <EmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyleButton>
                                </Grid>


                            </Grid>

                        </Grid>

                    </Grid>
                </Container>

            </StyledHero>
        </>
    )
}
