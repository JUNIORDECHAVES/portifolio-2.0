import { Grid, Typography, styled } from "@mui/material";
import {StyleButton} from "../styleButton/styleButton";

const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "80vw",
    padding: "10px 0",
    [theme.breakpoints.up('md')]: {
        height: "45vh",
    },
}));

const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "4px",
    border: `0.5px solid  ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    '&:hover': {
        backgroundColor: theme.palette.primary.light
    }
}));

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    srcImg: string;
    description: string
    technologies: string
    websiteURL: string;
    codeURL: string;
}

function ProjectCard ({
    title,
    subtitle,
    srcImg,
    description,
    technologies,
    websiteURL,
    codeURL
}: ProjectCardProps) {


    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <StyledImg src={srcImg} />
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                <Grid size={{ xs: 6 }}>
                    <StyleButton onclick={() => window.open(websiteURL)}>Visualizar Projeto</StyleButton>
                </Grid>
                <Grid  size={{ xs: 6 }}>
                    <StyleButton onclick={() => window.open(codeURL)}>Visualizar Código</StyleButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard