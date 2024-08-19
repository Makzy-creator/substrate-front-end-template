import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const Garage = () => {
  return (
    <div className="self-stretch w-full flex flex-col p-[16px] items-center gap-[16px] rounded-2xl bg-[#FFF]">
      {/* up section opens */}
      <div className="self-stretch w-full flex flex-col items-start gap-[20px] ">
        <div className="self-stretch flex justify-between items-start w-full">
          <h3 className="text-xl leading-normal text-[#003855]">My Garage</h3>
          <div className="flex flex-end items-center gap-[16px]">
            <Link
              to="/AddMyCar"
              className="w-[160px] rounded-full bg-[#BEC6FF] flex items-center justify-center md:px-[16px] md:py-[4px]"
              target=""
            >
              <p className="font-[400] font-karla text-base shrink-0 text-white text-center">
                Add my Car
              </p>
            </Link>

            {/* ICONS */}
            {/* <MenuButton aria-hidden="true"/> */}

            <button className="">
              <img
                className="shrink-0 p-[10px] "
                loading="lazy"
                alt=""
                src="/images/Menu.svg"
              />
            </button>

            <button className="">
              <img
                className="shrink-0 p-[10px]"
                loading="lazy"
                alt=""
                src="/images/hamburger.svg"
              />
            </button>
          </div>
        </div>

        <div className="self-stretch flex items-center justify-center w-full gap-s pr-[16px]">
          <Menu
            as="div"
            className="relative inline-block text-left font-karla text-base text-[#003855]"
          >
            <div>
              <MenuButton className="inline-flex w-full justify-between gap-[40px] rounded-xl md:py-[8px] md:px-[12px] font-karla text-base text-[#003855] border-[1px] border-solid border-[#BEC6FF]  hover:bg-gray-50">
                Status
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-5 w-5 text-[#858586]"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Beginner
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Advanced
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Expert
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          <div className="w-full flex items-start border-[1px] border-solid border-[#BEC6FF] rounded-xl gap-[10px] px-[12px] py-[8px]">
            <input
              type="text"
              placeholder="Search by name"
              className="text-base font-karla text-[#003855] font-inherit w-full outline-none border-none bg-transparent"
              name="text"
              id=""
            />
            <button onClick={open}>
              <img src="/images/Eye.svg" className="outline-[#858586]" alt="" />
            </button>
          </div>

          <Menu
            as="div"
            className="relative inline-block text-left font-karla text-base text-[#003855]"
          >
            <div>
              <MenuButton className="self-stretch inline-flex w-[176px] items-start justify-between gap-[10px] rounded-xl md:py-[8px] md:px-[10px] font-karla text-base text-[#003855] border-[1px] border-solid border-[#BEC6FF] hover:bg-gray-50">
                Recently received
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 h-[24px] w-5 text-[#858586]"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Beginner
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Advanced
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Expert
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
      {/* section closes */}

      {/* garage space opens */}
      <div className="self-stretch w-full md:h-[498px] flex items-center justify-center gap-[20px]">
        {/* <div className="w-[430px] h-[394px] flex flex-col items-center rounded-xl border border-solid border-[#000] box-border shadow-md">
          
        </div> */}
        {/* middle starts*/}  
       
          <h3 className="text-base font-karla text-center font-[400] text-[#004EB7]">
            Tier 2{" "}
            <span className="text-[#4E7FFF]">
              is required to <br/> unlock the feature
            </span>{" "}
          </h3>
       
          
        {/* middle ends*/}

        {/* <div className="w-[430px] h-[394px] flex flex-col items-center rounded-xl border border-solid border-[#000] box-border shadow-md">
          
        </div> */}
      </div>
      

      {/* product cards ends */}
    </div>
  );
};

export default Garage;
