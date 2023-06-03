import { Container } from "@mui/material";
import Footer from "../src/components/Footer";
import Header from "../src/components/header/Header";
import Partners from "../src/components/home_page_components/Partners";
import Statistics from "../src/components/home_page_components/statistics/Statistics";
import ThematicAreas from "../src/components/home_page_components/ThematicAreas";
import Values from "../src/components/home_page_components/Values";
import Landing from "../src/components/home_page_components/landing/Landing";
import Projects from "../src/components/home_page_components/projects/Projects";

export default function Home() {

  return (
    <div>
      <Header />
      <Landing />
      <Projects />
      <Statistics />
      <ThematicAreas />
      <Values />
      <Partners />
      <Footer />
    </div>
  );
}
