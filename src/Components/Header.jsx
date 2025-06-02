"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiEmail } from "react-icons/tfi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { Logo, NavLinks } from "@/hooks/Data";
import { FaArrowRightLong } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full 2xl:w-3/4 px-6 md:px-20 py-6 h-48">
        <UpperHeader />
        <LowerHeader />
      </div>
    </div>
  );
};

export default Header;

// =================== UPPER HEADER ===================
const UpperHeader = () => {
  const [isMob, setMob] = useState(false);
  const pathName = usePathname();

  const DataContactComp = [
    {
      icon: <TfiEmail />,
      Heading: "Email Us",
      Content: "aliarif.connet@gmail.com",
    },
  ];

  return (
    <div className="w-full h-1/2 flex justify-between items-center border-b border-gray-300">
      {/* Logo */}
      <div>
        <span className="text-xl text-blue-950 font-medium">{Logo}</span>
      </div>

      {/* Desktop Contact Details */}
      <div className="hidden md:flex gap-4">
        {DataContactComp.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="text-4xl">{item.icon}</span>
            <div className="flex flex-col">
              <span className="font-semibold">{item.Heading}</span>
              <span className="text-xs">{item.Content}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div
        className="md:hidden text-3xl text-blue-950 cursor-pointer">
        <HiOutlineBars3 onClick={() => setMob(true)} />
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-50 flex transition-transform duration-300 ease-in-out md:hidden origin-left ${isMob ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar */}
        <div className="w-3/4 h-full bg-white text-black py-10 px-4 flex flex-col gap-6">
          {
            NavLinks.map((curLink,index)=>{
              return (
                <Link href={curLink.link} key={index}
                 className={`w-full h-16 rounded-lg flex justify-between items-center px-4
                  ${pathName === curLink.link ? "bg-blue-950 text-white" : "bg-gray-200"}
                  `}
                >
                  <span>{curLink.Heading}</span>
                  <span><FaArrowRightLong /></span>
                </Link>
              )
            })
          }
        </div>

        {/* Overlay + Close */}
        <div className="w-1/4 h-full bg-[rgba(0,0,0,0.8)] backdrop-blur-sm flex justify-end items-start py-10 px-8">
          <span
            className="text-3xl text-white cursor-pointer">
            <RxCross1 onClick={() => setMob(false)} />
          </span>
        </div>
      </div>
    </div>
  );
};

// =================== LOWER HEADER ===================
const LowerHeader = () => {
  const [onHover, setHover] = useState(false);
  const [onHoverIndex, setHoverIndex] = useState(null);
  const pathName = usePathname();

  return (
    <div className="w-full h-1/2 hidden md:grid grid-cols-6 place-items-center py-2">
      {
       NavLinks.map((nav, index) => {
        const isActive = nav.link === pathName;
        const isHovered = onHover && onHoverIndex === index;

        return (
          <Link
            key={index}
            href={nav.link}
            onMouseEnter={() => {
              setHover(true);
              setHoverIndex(index);
            }}
            onMouseLeave={() => {
              setHover(false);
              setHoverIndex(null);
            }}
            className={`NavLinkIs w-full h-full flex justify-center items-center text-lg
              ${index !== 0 && "border-l border-gray-300"}
              relative after:content-[''] after:w-full after:h-[3px] after:bg-blue-900 after:absolute after:-top-2 
              ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
              ${
                isHovered
                  ? "after:transition after:duration-700 after:scale-x-100 after:origin-left ease-in-out"
                  : !onHover && onHoverIndex === null
                  ? "after:transition after:duration-700 after:scale-x-0 after:origin-left ease-in-out"
                  : ""
              }
            `}
          >
            {nav.Heading}
          </Link>
        );
      })}
    </div>
  );
};
