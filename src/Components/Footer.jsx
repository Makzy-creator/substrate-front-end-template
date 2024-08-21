import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="self-stretch w-full h-auto flex flex-col sm:flex-row items-start gap-[60px] sm:justify-between bg-[#111B3C] px-6 md:px-12 py-[25px] min-[2000px]:py-[120px]">
      <div className="flex justify-between sm:items-start flex-1 w-full ">
        <div className="flex flex-col  items-start flex-1 font-karla gap-[16px] text-base w-full min-[2000px]:text-xl">
          <Link to="/About.jsx" className="font-bold  text-[#BEC6FF]">
            About
          </Link>
          <Link to="/" className="text-[#F8F8FF] font-[400]">
            Litepaper
          </Link>
          <Link to="/" className="text-[#F8F8FF] font-[400]">
            Chain Explorer
          </Link>
        </div>

        <div className="flex flex-col items-start flex-1 font-karla gap-[16px] text-base w-full min-[2000px]:text-xl">
          <Link to="/" className="font-bold text-[#BEC6FF]">
            Get in Touch
          </Link>
          <Link
            to="https://twitter.com/motover_se"
            className="text-[#F8F8FF] font-[400]"
          >
            Twitter
          </Link>
          <Link
            to="https://www.instagram.com/motover_se/"
            className="text-[#F8F8FF] font-[400]"
          >
            Instagram
          </Link>
          <Link
            to="https://www.linkedin.com/company/moto-verse"
            className="text-[#F8F8FF] font-[400]"
          >
            LinkedIn
          </Link>
        </div>
        <div className="flex flex-col items-start flex-1 font-karla gap-[16px] text-base w-full min-[2000px]:text-xl">
          <Link
            to="https://discord.gg/X39mX7VEPq"
            className="text-[#F8F8FF] font-[400]"
          >
            Discord
          </Link>
          <Link
            to="https://t.me/Motover_se"
            className="text-[#F8F8FF] font-[400]"
          >
            Telegram
          </Link>
        </div>
      </div>

      <div className="text-white">
        <div className="flex items-center gap-2">
          <img className="size-[60px]" alt="" src="images/newlogo.svg" />
          <h1 className="text-[#ECEDFF] font-karla items-start text-[50px] uppercase font-[500] mt-[-10px] ">
            Motoverse
          </h1>
        </div>
        <span className="inline-block ml-[68px]  text-[16px] lowercase font-[400] leading-normal min-[2000px]:text-xl">
          {" "}
          Softlaw LLC 2024 All Right Reserved ©
        </span>
      </div>
      {/* font-karla text-[#ECEDFF] text-center text-[40px] sm:text-[60px] uppercase font-[500] tracking-[-1.0px] sm:tracking-[-3px] leading-normal
      
      block sm:items-end lowercase font-[400] sm:font-[700] text-[16px] sm:text-[18px] leading-normal sm:leading-[120%] tracking-[-0.1px] text-[#F8F8FF]

block md:flex-row items-center justify-center md:justify-between sm:items-start relative gap-[10px] bg-[#111B3C] box-border
      
      */}
    </footer>
  );
};

export default Footer;
