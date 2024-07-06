import Footer from "../dashboard/components/Footer";
import Hero from "./Hero";
import Features from "./Features";
import NavBar from "./NavBar";
import Product from "./Product";
import HowItWorks from "./HowItWorks";


const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Features />
      <Product />
      <HowItWorks />
      <Footer />

    </div>
  );
};

export default Home;
