import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Contact from "./Contact";
import Footer from "../dashboard/components/Footer";
import Navbar from "../pages/NavBar";


const Home = () => {
  return (
    <div className="bg-zinc-50 scroll-smooth">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
