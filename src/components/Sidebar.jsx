import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaMobile, FaLinkedin } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";
import { FaSquareBehance } from "react-icons/fa6";
import { MdOutlineMenuBook } from "react-icons/md";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { FaInstagramSquare } from "react-icons/fa";
import aaina from "../assets/aaina.jpeg";

export default function Sidebar() {
  return (
    <div className="min-h-screen p-3">
      <div className="flex justify-center mt-2">
        <img src={aaina} alt="img" className="w-36 h-36 rounded-full" />
      </div>
      <p className="text-[#38bdf8] font-semibold text-left mt-10 text-2xl">
        CONTACT
      </p>
      <hr className="bg-[#38bdf8] mb-2 font-bold" />
      <div className="flex items-center gap-1 mb-2">
        <IoIosMail size={25} style={{ color: "fdba74" }} />
        <p className="text-gray-500 text-xs">najafayina@gmail.com</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaMobile size={25} style={{ color: "#fdba74" }} />
        <p className="text-gray-500 text-xs">03497457082</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaAddressCard size={25} style={{ color: "#fdba74" }} />
        <p className="text-gray-500 text-xs">Lahore, Pakistan</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaGithubAlt size={25} style={{ color: "#fdba74" }} />
        <a href="https://github.com/Aaina0" className="text-gray-500 text-xs">
          https://github.com/Aaina0
        </a>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaLinkedin size={25} style={{ color: "#fdba74" }} />
        <a
          href="https://www.linkedin.com/in/aina-najaf-developer/"
          className="text-gray-500 text-xs"
        >
          https://www.linkedin.com/in/aina-najaf-developer/
        </a>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaSquareBehance size={25} style={{ color: "#fdba74" }} />
        <a
          href="https://www.behance.net/ayinanajaf1"
          className="text-gray-500 text-xs"
        >
          https://www.behance.net/ayinanajaf1
        </a>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaInstagramSquare size={25} style={{ color: "#fdba74" }} />
        <a href="https://www.instagram.com/" className="text-gray-500 text-xs">
          https://www.instagram.com/
        </a>
      </div>
      <p className="text-[#38bdf8] font-semibold text-left mt-20 text-2xl">
        SKILLS
      </p>
      <hr className="bg-[#38bdf8] mb-2 font-bold" />
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">HTML5</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-5/6 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">
            Tailwind CSS
          </div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-3/4 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">JavaScript</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-5/6 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">React JS</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-3/4 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">Next JS</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-2/5 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">MERN Stack</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-3/4 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">Mongo DB</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-2/5 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">Express JS</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-2/5 mb-2"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-500">Node JS</div>
        </div>
        <div className="w-full bg-sky-400 h-1.5 rounded-full  ">
          <div className="bg-orange-300 h-1.5 rounded-full w-5/6 mb-2"></div>
        </div>
      </div>
      <p className="text-[#38bdf8] font-semibold text-left mt-20 text-2xl">
        HOBBIES
      </p>
      <hr className="bg-[#38bdf8] mb-2 font-bold" />
      <div className="flex items-center gap-1 mb-2">
        <GiChefToque size={25} style={{ color: "#fdba74" }} />
        <p className="text-gray-500 text-xs font-bold">Cooking</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <MdOutlineMenuBook size={25} style={{ color: "#fdba74" }} />
        <p className="text-gray-500 text-xs font-bold">Reading</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <PiPottedPlantDuotone size={25} style={{ color: "#fdba74" }} />
        <p className="text-gray-500 text-xs font-bold">Gardening</p>
      </div>
    </div>
  );
}
