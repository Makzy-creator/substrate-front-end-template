import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { DropdownMenu } from "@radix-ui/themes";
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const handleNav = () => {
    setNav(!nav);
  };
  const [isFixed, setIsFixed] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);
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
    <header
      className={`self-stretch ${
        isFixed ? "fixed-top " : "sticky-top"
      } bg-white-50 ease-in-out duration-500 flex w-full h-auto items-center justify-between py-[8px] md:py-[10px] px-6 md:px-12 box-border z-[99] gap-auto text-center text-[18px] text-black shadow-md font-karla`}
    >
      {/* Desktop navigation view */}

      <div className="flex items-center justify-center gap-[60px] max-w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center justify-center gap-2">
          <img
            src="/images/newlogo.svg"
            className="shrink-0"
            loading="lazy"
            alt="Logo"
          />
          <h3 className="text-inherit min-[2000px]:text-2xl uppercase text-[20px] md:text-inherit font-medium font-inherit whitespace-nowrap">
            Motoverse
          </h3>
        </Link>
        {/* Logo end */}

        {/* other links start */}

        <ul className="gap-[20px] text-[18px] hidden md:flex  min-[2000px]:text-2xl">
          <li>
            <Link to="/about" className="relative leading-[130%]">
              About
            </Link>
          </li>
          <li>
            <Link to="/technology" className="relative leading-[130%]">
              Technology
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-row items-center justify-center gap-[40px] max-w-full text-xl">
        <ul className="flex-1 flex flex-row items-center justify-between gap-[40px]">
          {/* <li className="flex flex-row items-center justify-start gap-[8px]">
                <DropdownMenu.Root>
                  {" "}
                  <DropdownMenu.Trigger>
                    <button className="relative leading-[130%] inline-flex items-center gap-2 min-w-[72px] outline-none border-none">
                      Country <DropdownMenu.TriggerIcon />
                    </button>
                  </DropdownMenu.Trigger>{" "}
                  <DropdownMenu.Content
                    style={{
                      backgroundColor: "#00000000",
                    }}
                  >
                    <div className="flex flex-col gap-2">hello</div>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
          </li> */}

          {/* <li className="flex flex-row items-center justify-start gap-[8px]">
                <DropdownMenu.Root>
                  {" "}
                  <DropdownMenu.Trigger>
                    <button className="relative leading-[130%] inline-flex  items-center gap-2 min-w-[72px] outline-none border-none">
                      USDC <DropdownMenu.TriggerIcon />
                    </button>
                  </DropdownMenu.Trigger>{" "}
                  <DropdownMenu.Content
                    style={{
                      backgroundColor: "#00000000",
                    }}
                  >
                    <div className="flex flex-col gap-2">hello</div>
                  </DropdownMenu.Content>
                </DropdownMenu.Root>
          </li> */}

          <Link
            to="/AddMyCar"
            className="rounded-full   bg-[#4E7FFF] flex-1 flex items-center justify-center py-[5px] px-[15px] md:px-[16px] text-center text-base text-green-0 font-manrope"
          >
            {" "}
            Connect
          </Link>
          {/* <button
            to=""
            className="rounded-full bg-[#4E7FFF] flex-1 flex items-center justify-center py-[5px] px-[15px] md:px-[16px] text-center text-base text-green-0 font-manrope"
          >
            Connect
          </button> */}
        </ul>
      </div>

      {/* mobile navigation Icon */}
      {/* <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div> */}

      {/* mobile navigation menu */}
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-[#F3F3F6] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* mobile logo */}
        <Link
          to="/"
          className="flex-1 flex flex-row items-center justify-start gap-[8px]"
        >
          <img
            src="/images/newlogo.svg"
            className="h-[25px] w-[25px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt="Logo"
          />
          <h3 className="m-0 flex-1 relative text-inherit tracking-[-0.04em] uppercase font-medium font-inherit whitespace-nowrap">
            Motoverse
          </h3>
        </Link>

        {/* mobile navigation items */}

        <div className="p-4 border-1 rounded-xxl hover:bg-blue-300 duration-300 cursor-pointer">
          <li>
            <Link
              to="/about"
              className="relative leading-[130%] inline-block min-w-[54px]"
            >
              About
            </Link>
          </li>
        </div>
        <div className="p-4 border-1 rounded-xxl hover:bg-blue-300 duration-300 cursor-pointer">
          <li>
            <Link
              to="/about"
              className="relative leading-[130%] inline-block min-w-[54px]"
            >
              About
            </Link>
          </li>
        </div>

        <Link to="/AddMyCar">Connect</Link>
        <button
          to="/AddMyCar"
          className="rounded-full bg-[#4E7FFF] bg-[100%] flex flex-row items-center justify-center py-[5px] px-[15px]  text-center text-base text-green-0 font-manrope"
        >
          Connect
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
