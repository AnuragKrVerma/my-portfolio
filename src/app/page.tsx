import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <div className="" >
          <About />
        </div>
        <Portfolio />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
