import Hero from "./Hero";
import Hero2 from "./Hero2";
import About from "./About";
import Products from "./Products";
import HowItWorks from "./HowItWorks";
import Testmonials from "./Testmonials";
import Team from "./Team";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MtvsDao from "./MtvsDao";

const LandingPage = () => {
  return (
    <div className="w-full max-w-full bg-[#ECEDFF] flex flex-col min-[2000px]:[&>*]:px-[5vw] ">
      <Navbar/>
      <Hero />
      <Hero2 />
      <About />
      <Products />
      <HowItWorks />
      <MtvsDao />
      <Testmonials />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;
