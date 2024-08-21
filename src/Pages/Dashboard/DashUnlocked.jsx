import Navbar from "../../Components/LandingPage/Navbar";
import Garage from "./Garage";
import HeroTwo from "./HeroTwo";
import SideBar from "./SideBar";
import Footer from "../../Components/LandingPage/Footer";
import MyFavourites from "./MyFavourites";

const DashUnlocked = () => {
  return (
    <div>
     <Navbar/>
    <main className="w-full flex items-start h-auto bg-[#F3F3F6]">
      
      <SideBar />

      <section className="w-5/6 md:p-[40px] flex flex-col items-start gap-[40px] box-border font-manrope bg-[#F3F3F6]">
        <HeroTwo />
        <Garage />
        <MyFavourites />
      </section>
    </main>
     <Footer />
   </div>
  );
};

export default DashUnlocked;
