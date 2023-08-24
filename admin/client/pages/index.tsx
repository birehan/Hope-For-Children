import { Container } from "@mui/material";
import Statistics from "../src/components/home_page_components/statistics/Statistics";
import ThematicAreas from "../src/components/home_page_components/ThematicAreas";
import Values from "../src/components/home_page_components/Values";
import Landing from "../src/components/home_page_components/landing/Landing";
import Projects from "../src/components/home_page_components/projects/Projects";
import Partners from "../src/components/home_page_components/Partners";

export default function Home() {
  return (
    <div>
      <Landing />
      <Projects />
      <Statistics />
      <ThematicAreas />
      <Values />
      <Partners />
    </div>
  );
}
