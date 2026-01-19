import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/navBar/navBar";
import { About } from "./Sections/About/about";
import { Hero } from "./Sections/Hero/hero";
import { Projects } from "./Sections/Projects/Project";

export function Home() {
    return (
        <>
            <NavBar />
            <Hero />
            <About />
            <Projects />
            <Footer />
        </>
    )
}