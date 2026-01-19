import { AnimationComponent } from "../../../../components/animationComponent/animationComponent";
import ProjectCard from "../../../../components/ProjectCard/projectCard";
import { theme } from "../../../../theme";
import { Box, Container, Grid, Typography, styled } from "@mui/material";

const StyledExperience = styled("section")(() => ({
    backgroundColor: theme.palette.primary.main,

}));

export function Projects() {
    const projects = [
        {
            title: "Apoia Dev",
            subtitle: "Out 2025 - Nov 2025",
            srcImg: "/src/assets/images/Apoia-Dev.png",
            description: "Plataforma de apoio coletivo voltada para influenciadores, permitindo que eles recebam apoio financeiro de sua comunidade, onde podem mandar doações com uma mensagem personalizada. Onde os pagamentos são processados de forma segura através da integração com a API do Stripe.",
            technologies: "Tecnologias: TypeScript, Next.js, Shadcn UI, Prisma, PostgreSQL, Tailwind CSS, Zoid, Stripe.",
            websiteURL: "https://apoia-dev-dmny.vercel.app/",
            codeURL: "https://github.com/JUNIORDECHAVES/Apoia_Dev",
        },
        {
            title: "Ecommerce MercadoJa",
            subtitle: "Jun 2025 - Jul 2025",
            srcImg: "/src/assets/images/MercadoJa.png",
            description: "Ecommerce de um supermercado online, onde os usuários podem navegar por uma variedade de produtos, adicionar itens ao carrinho de compras e finalizar suas compras de forma segura.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://e-commerce-mercadoja.vercel.app/",
            codeURL: "https://github.com/JUNIORDECHAVES/e-commerce-mercadoja",
        },
        {
            title: "Youtube Clone",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/youtube-clone.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Tecnologias: TypeScript, React, Styled Components, Validator, Axios, React Router, React Hook Form, YouTube API",
            websiteURL: "https://youtube-clone-3e7s.vercel.app/",
            codeURL: "https://github.com/JUNIORDECHAVES/youtube-clone",
        },
        {
            title: "Decodificador",
            subtitle: "Fev 2024 ",
            srcImg: "/src/assets/images/Decodificador.png",
            description: "site onde o usuário pode codificar e decodificar mensagens utilizando algoritmos de criptografia. A aplicação oferece uma interface amigável para que os usuários possam inserir suas mensagens e visualizar o resultado instantaneamente. OBS: o Decodificador foi desenvolvido através do curso da Alura ",
            technologies: "Tecnologias: JavaScript, HTML, CSS",
            websiteURL: "https://decodificador-pi.vercel.app/",
            codeURL: "https://github.com/JUNIORDECHAVES/decodificador",
        },
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-financas.png",
            description: "Ecommerce de um supermercado online, onde os usuários podem navegar por uma variedade de produtos, adicionar itens ao carrinho de compras e finalizar suas compras de forma segura.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
        {
            title: "Project Exemple",
            subtitle: "Jul 2023 - Dez 2023",
            srcImg: "/src/assets/images/project-financas.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Tecnologias: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://trello.com/",
            codeURL: "https://github.com/",
        },
    ]
    return (
        <StyledExperience id="projects">
            <Container maxWidth="lg">
                <Box pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projetos</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project, index) => (
                        <Grid size={{ md: 6 }} key={index}>
                            <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>

            </Container>
        </StyledExperience>
    )
}
