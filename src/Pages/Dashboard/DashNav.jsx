import { NavLink } from "react-router-dom";
import { DropdownMenu } from "@radix-ui/themes";
import { useState, useEffect } from "react";


const DashNav = () => {
    const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      if (scrollPosition > heroHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`self-stretch ${
        isFixed ? "fixed-top" : "sticky-top"} bg-[#F3F3F6] bg-100% w-[1440px] h-[102px] flex items-start shadow-b-[0px 4px 13.2px 0px rgba(0,0,0,0.1)] font-manrope text-xl font-[400px] text-[#000000] px-[40px]`}
        
        style={{
            transition: "fixed-top .10s ease-in",
          }}
        >

        {/* 
        className={`self-stretch ${
            isFixed ? "fixed-top" : "sticky-top"
          }bg-white-50 flex flex-row w-[1442px] h-[82px] max-w-full items-center justify-between py-s px-xl md:px-[60px] box-border z-[99] gap-auto text-center text-8xl text-black font-karla mq1125:px-[30px] mq1125:box-border mq800:px-[15px] mq800:box-border mq320:flex-wrap mq320:justify-content-center`}

          style={{
            transition: "fixed-top .10s ease-in",
          }}
        
        */}
      <div className="w-[1360px] flex flex-1 flex-col pt-[40px] pb-[20px] items-center gap-[10px] max-w-full ">
        <nav className="self-stretch w-[1360px] h-[42px] flex items-center justify-between gap-[auto] ">
          <div className="w-[390px] flex items-center gap-[60px]">
            <NavLink
              to="/"
              className="w-[144.67px] h-[28px] max-w-full flex gap-[8px] items-center justify-center"
            >
              <img
                src="/images/newlogo.svg"
                className=""
                loading="lazy"
                alt="Logo"
              />
              <h3 className="relative text-xl tracking-[-0.04em] uppercase font-medium font-inherit ">
                Motoverse
              </h3>
            </NavLink>

            <div className="w-[185px] h-[27px] max-w-full flex items-start gap-[20px] font-manrope text-xl font-[400px] text-[#000000]">
              <NavLink
                to="/Front-End/src/Components/LandingPage/About.jsx"
                className="text-center"
              >
                About
              </NavLink>
              <NavLink
                to="/Front-End/src/Components/LandingPage/About.jsx"
                className="text-center"
              >
                Technology
              </NavLink>
            </div>
          </div>

          <div className="w-[480px] h-[42px] max-w-full flex items-center gap-[40px] font-manrope text-xl font-[400px]">
            <div className="w-[98px] h-[27px] max-w-full flex items-center gap-[8px] font-inherit text-inherit">
              <DropdownMenu.Root>
                {" "}
                <DropdownMenu.Trigger>
                  <button className="outline-none border-none flex items-center justify-center gap-[8px]">
                    <h3 className="font-inherit text-inherit leading-normal text-center">
                      Mexico
                    </h3>
                    <DropdownMenu.TriggerIcon />
                  </button>
                </DropdownMenu.Trigger>{" "}
                <DropdownMenu.Content
                  style={{
                    backgroundColor: "#0000000",
                  }}
                >
                  <div className="">Nigeria</div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>

            <div className="w-[98px] h-[27px] max-w-full flex items-center gap-[8px] font-inherit text-inherit">
              <DropdownMenu.Root>
                {" "}
                <DropdownMenu.Trigger>
                  <button className="outline-none border-none flex items-center justify-center gap-[8px]">
                    <h3 className="font-inherit text-inherit leading-normal text-center">
                      USDC
                    </h3>
                    <DropdownMenu.TriggerIcon />
                  </button>
                </DropdownMenu.Trigger>{" "}
                <DropdownMenu.Content
                  style={{
                    backgroundColor: "#0000000",
                  }}
                >
                  <div className="">Nigeria</div>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>

            <div className="w-[216px] h-[42px] max-w-full flex items-center gap-[20px]">
              <NavLink
                to="/Wallet"
                className="flex-1 flex flex-row items-center justify-start gap-[8px]"
              >
                <img
                  src="/images/Wallet.svg"
                  className="h-[24px] w-[24px] flex flex-col justify-center items-center gap-[10px]"
                  loading="lazy"
                  alt="Logo"
                />
                <h3 className="text-center relative text-inherit leading-normal uppercase font-inherit whitespace-nowrap">
                  20,430 USDC
                </h3>
              </NavLink>
              <div className="flex w-[42px] h-[42px] max-w-full items-center gap-[10px] rounded-full">
                <img
                  src="/images/dp.svg"
                  className=""
                  loading="lazy"
                  alt="Logo"
                />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default DashNav;
