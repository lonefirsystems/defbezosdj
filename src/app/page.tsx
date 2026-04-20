import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Media from "@/components/Media";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Services />
      <Media />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
