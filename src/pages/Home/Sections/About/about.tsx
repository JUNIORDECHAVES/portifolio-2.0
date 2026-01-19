
import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import { AnimationComponent } from "../../../../components/animationComponent/animationComponent";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const StyledCard = styled(Card)(({ theme }) => ({
    padding: "10px 10px",
    textAlign: "center",
    marginBottom: "10px",
    '&:hover': {
        backgroundColor: theme.palette.secondary.light
    }
}));

export function About() {
    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Tailwind CSS", "Styled Components", "Shadcn UI", "Material UI", "Zoid", "Prisma", "PostgreSQL", "MySQL"
    ]
    return (
        <section id="about">
            <Container>
                <Box pt={5} mb={5} >
                    <Typography variant="h2" alignItems={'center'} >Sobre mim</Typography>
                </Box>
                <Grid container spacing={2} display={'flex'} justifyContent={'center'} pb={3}>
                    <Grid size={{ xs: 9, md: 2.5 }} >
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign={'center'} fontWeight={'600'}>experiência</Typography>
                                <Typography textAlign={'center'} >1 ano</Typography>
                                <Typography textAlign={'center'} >Desenvolvedor Frontend</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{ xs: 9, md: 2.5 }} >
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign={'center'} fontWeight={'600'}>educação</Typography>
                                <Typography textAlign={'center'} >engenheiro de software</Typography>
                                <Typography textAlign={'center'} >Desenvolvedor Frontend</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Olá! Eu sou Junior Chaves, um futuro Desenvolvedor Frontend focado em construir interfaces modernas e intuitivas. Estou buscando uma oportunidade de estágio para aplicar meu conhecimento e acelerar meu desenvolvimento na área.

                        Tenho proficiência na criação de soluções escaláveis utilizando as principais tecnologias do mercado: React, Next.js, TypeScript e Tailwind CSS.
                    </Typography>
                </Box>
                <hr />

                <Box id="skills" pt={1} mb={3} >
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>

                <Box mb={5}>
                    <Grid container spacing={3} justifyContent={'center'}>
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </section>
    )
}