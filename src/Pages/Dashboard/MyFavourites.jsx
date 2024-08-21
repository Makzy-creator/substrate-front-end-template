import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const MyFavourites = () => {
  return (
    <div className="self-stretch w-full flex flex-col p-[16px] items-center gap-[12px] rounded-2xl bg-[#FFF]">
      {/* up section opens */}
      <div className="self-stretch w-full flex flex-col items-start gap-[20px] ">
        <div className="self-stretch flex justify-between items-start w-full">
          <h3 className="text-xl leading-normal text-[#003855]">
            My Favourites
          </h3>
          <div className="flex flex-end items-center gap-[16px]">
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

        <div className="self-stretch flex py-[8px] items-center w-full border-t border-[#BEC6FF] gap-2 border-b">
          <h1 className="font-manrope text-[10px] font-[400] leading-normal text-[#003855] flex-shrink-0 md:w-[280px]">
            Items
          </h1>

          <h3 className="font-manrope text-[10px] font-[400] leading-normal text-[#003855] flex-shrink-0 md:w-xl">
            Floor Price
          </h3>

          <h3 className="font-manrope text-[10px] font-[400] leading-normal text-[#003855] flex-shrink-0 md:w-xl">
            Listing Price
          </h3>

          <h3 className="font-manrope text-[10px] font-[400] leading-normal text-[#003855] flex-shrink-0 md:w-xl">
            Owner
          </h3>
        </div>
      </div>
      {/* section closes */}

      {/* garage space opens */}
      <div className="self-stretch w-full h-[263px] flex flex-col items-center gap-[16px]">
        <div className="self-stretch w-full flex items-center gap-[8px] border-b border-[#ECEDFF]">
            
            <img
            className="w-[60px] h-[60px] "
            loading="lazy"
            alt=""
            src="/images/car1.svg"
          />

          <h1 className="text-[20px] text-[400] leading-normal font-manrope text-[#003855] md:w-[480px]">
            Audi Q8 e-tron
          </h1>
        
          

            <h1 className="flex font-karla leading-normal font-[400] text-[16px] text-[#003855] md:w-[170px]">
              16.4 dot
            </h1>
            <h1 className="flex font-karla leading-normal font-[400] text-[16px] text-[#003855]">
              24 dot
            </h1>
         
        </div>
      </div>

      {/* product cards ends */}
    </div>
  );
};

export default MyFavourites;
