import React from 'react'
import { FiMessageCircle } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { LuMessageCircleCode } from "react-icons/lu";
import { MdGroups2 } from "react-icons/md";
import { RiInboxArchiveFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa6";
import { IoMdPhotos } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { BsWhatsapp } from "react-icons/bs";
import { CiMenuKebab } from "react-icons/ci";
import { SiImessage } from "react-icons/si";


const Dashboard = () => {

    return (
      <div>
        {/* Navbar */}
        <div>
          <nav className="flex gap-2 bg-gray-900 text-white">
            <span className="mt-1">
              {" "}
              <BsWhatsapp />{" "}
            </span>{" "}
            <h1>Whatsapp</h1>
          </nav>
        </div>
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="flex flex-col justify-between text-3xl   w-10  bg-gray-900 text-white">
            {/* 1st */}
            <div className=" flex flex-col gap-3 mt-2 ml-1">
              <FiMessageCircle />
              <FaPhoneAlt />
              <HiOutlineStatusOnline />
              <LuMessageCircleCode />
              <MdGroups2 />
              <RiInboxArchiveFill />
              <FaLock />
            </div>
            {/* Bootom */}

            <div className="flex flex-col">
              <IoMdPhotos />
              <CgProfile />
            </div>
          </div>
                <div className="bg-black w-140 flex gap-2 flex-col">
                    <div className=' flex justify-between text-white mt-1 ml-2 '>
                            <h1 className='text-3xl font-extrabold'>Chats</h1> <span className='flex gap-2 text-2xl'><CiMenuKebab /><SiImessage /></span>
                    </div>
            <input
              type="text"
              placeholder="            search or start new chat"
              className="rounded-lg border border-b-emerald-600 text-gray-400  mt-6 ml-5 w-70   h-10"
            />
            <div className="flex gap-1 text-white bg-gray-700 rounded-lg ml-2 mr-2 mt-2">
              <span className="text-3xl ml-1 mt-1">
                {" "}
                <CgProfile />
              </span>
              <div className="flex flex-col gap-1">
                <h1>Amjad</h1>
                <p>Amjad:hello developers</p>
              </div>
            </div>
            <div className="flex gap-1 text-white bg-gray-700 rounded-lg ml-2 mr-2 mt-2">
              <span className="text-3xl ml-1 mt-1">
                {" "}
                <CgProfile />
              </span>
              <div className="flex flex-col gap-1">
                <h1>Amjad</h1>
                <p>Amjad:hello developers</p>
              </div>
            </div>
            <div className="flex gap-1 text-white bg-gray-700 rounded-lg ml-2 mr-2 mt-2">
              <span className="text-3xl ml-1 mt-1">
                {" "}
                <CgProfile />
              </span>
              <div className="flex flex-col gap-1">
                <h1>Amjad</h1>
                <p>Amjad:hello developers</p>
              </div>
            </div>
            <div className="flex gap-1 text-white bg-gray-700 rounded-lg ml-2 mr-2 mt-2">
              <span className="text-3xl ml-1 mt-1">
                {" "}
                <CgProfile />
              </span>
              <div className="flex flex-col gap-1">
                <h1>Amjad</h1>
                <p>Amjad:hello developers</p>
              </div>
            </div>
            <div className="flex gap-1 text-white bg-gray-700 rounded-lg ml-2 mr-2 mt-2">
              <span className="text-3xl ml-1 mt-1">
                {" "}
                <CgProfile />
              </span>
              <div className="flex flex-col gap-1">
                <h1>Amjad</h1>
                <p>Amjad:hello developers</p>
              </div>
            </div>
            <div className="flex gap-1 text-white bg-gray-700 rounded-lg ml-2 mr-2 mt-2">
              <span className="text-3xl ml-1 mt-1">
                {" "}
                <CgProfile />
              </span>
              <div className="flex flex-col gap-1">
                <h1>Amjad</h1>
                <p>Amjad:hello developers</p>
              </div>
            </div>
                </div>
                <div className='bg-gray-500 h-147 w-400'>

                </div>
        </div>
      </div>
    );
}

export default Dashboard