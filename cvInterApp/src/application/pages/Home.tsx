import Footer from "../dashboard/components/Footer";
import Hero from "./Hero";
import Features from "./Features";
import NavBar from "./NavBar";
import Product from "./Product";
import HowItWorks from "./HowItWorks";
import NotFound from "./NotFound";
import Contact from "./Contact";



const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Product />
      <HowItWorks />
      <Contact />
      <Footer />
      <NotFound />

    </div>
  );
};

export default Home;
