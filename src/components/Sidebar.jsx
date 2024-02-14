import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaMobile, FaLinkedin } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa6";
import { FaSquareBehance } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import aaina from "../assets/aaina.jpeg";

export default function Sidebar() {
  return (
    <div className="min-h-screen p-3">
      <div className="flex justify-center mt-2">
        <img src={aaina} alt="img" className="w-36 h-36 rounded-full" />
      </div>
      <p className="text-[#5B7FC5] font-semibold text-left mt-3 text-2xl">
        Contact
      </p>
      <hr className="bg-[#5B7FC5] mb-2 font-bold" />
      <div className="flex items-center gap-1 mb-2">
        <IoIosMail size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">najafayina@gmail.com</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaMobile size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">03497457082</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaAddressCard size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">Lahore, Pakistan</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaGithubAlt size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">https://github.com/Aaina0</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaLinkedin size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">
          linkedin.com/in/aina-najaf-developer
        </p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaSquareBehance size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">www.behance.net/ayinanajaf1</p>
      </div>
      <div className="flex items-center gap-1 mb-2">
        <FaInstagramSquare size={25} style={{ color: "#5B7FC5" }} />
        <p className="text-gray-600 text-xs">www.instagram.com/incodeland/</p>
      </div>
      <p className="text-[#5B7FC5] font-semibold text-left mt-3 text-2xl">
        Skill
      </p>
      <hr className="bg-[#5B7FC5] mb-2 font-bold" />
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">HTML5</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">
            Tailwind CSS
          </div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">JavaScript</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">React JS</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">Next JS</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">MERN Stack</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">Mongo DB</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">Express JS</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="text-xs font-semibold text-gray-600">Node JS</div>
        </div>
        <div className="w-full bg-gray-700 h-1.5 rounded-full  ">
          <div className="bg-orange-400 h-1.5 rounded-full w-5/6"></div>
        </div>
      </div>
    </div>
  );
}
