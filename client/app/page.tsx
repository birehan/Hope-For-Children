import Footer from "@components/Footer";
import Header from "@components/Header";
import Landing from "@components/Landing";
import Partners from "@components/Partners";
import Projects from "@components/Projects";
import Statistics from "@components/Statistics";
import ThematicAreas from "@components/ThematicAreas";
import Values from "@components/Values";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Landing />
      <Projects />
      <Statistics />
      <ThematicAreas />
      <Values />
      <Partners />
      <Footer />
    </main>
  );
}
