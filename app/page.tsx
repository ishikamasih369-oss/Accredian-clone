import Footer from "./components/Footer/Footer";
import Contact from "./sections/Contact/Contact";
import FAQ from "./sections/FAQ/FAQ";
import Testimonials from "./sections/Testimonials/Testimonials";
import Stats from "./sections/Stats/Stats";
import Framework from "./sections/Framework/Framework";
import Programs from "./sections/Programs/Programs";
import Domains from "./sections/Domains/Domains";
import WhyChoose from "./sections/WhyChoose/WhyChoose";
import Companies from "./sections/Companies/Companies";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <WhyChoose/>
      <Domains/>
      <Programs/>
      <Framework/>
      <Stats/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
  
    </>
  );
}