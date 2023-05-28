import { Container } from "@mui/material";
import Footer from "../src/components/Footer";
import Header from "../src/components/header/Header";
import Landing from "../src/components/landing/Landing";
import Partners from "../src/components/Partners";
import Projects from "../src/components/projects/Projects";
import Statistics from "../src/components/Statistics";
import ThematicAreas from "../src/components/ThematicAreas";
import Values from "../src/components/Values";

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
