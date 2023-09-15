import React from 'react';
import { AiFillDelete, AiFillStar, AiOutlineMail } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { BsFillArchiveFill } from 'react-icons/bs';
import {
  FaChevronLeft,
  FaChevronRight,
  FaExpandArrowsAlt,
  FaHistory,
} from 'react-icons/fa';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { RiDraftFill } from 'react-icons/ri';
import Footer from '../Share/Footer';

const InboxPro = ({ name }) => {
  return (
    <div>
      <div className="mt-24 p-7 w-full">
        <div className="flex items-center">
          <div className="h-12 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold"> {name} </h1>
        </div>
        <div class="grid grid-cols-12  bg-white mt-16 rounded-xl pb-20">
          <div class="col-span-3 ">
            <button className="bg-accent hover:bg-primary py-3 w-full uppercase rounded-l-md rounded-b-none text-white font-bold flex justify-center gap-2 shadow-lg">
              <AiOutlineMail className="mt-1" />
              Compose
            </button>

            <div className="p-8">
              <h1 className="text-xl font-bold">MAILBOXES</h1>
              <p className=" flex items-center gap-2 mt-5 font-bold underline cursor-pointer hover:text-primary">
                <AiOutlineMail /> Inbox
              </p>
              <p className=" flex items-center gap-2 mt-3 font-bold underline cursor-pointer hover:text-primary">
                <RiDraftFill /> Draft
              </p>
              <p className=" flex items-center gap-2 mt-3 font-bold underline cursor-pointer hover:text-primary">
                <AiFillStar /> Start
              </p>
              <p className=" flex items-center gap-2 mt-3 font-bold underline cursor-pointer hover:text-primary">
                <BiPaperPlane /> Sent Messages
              </p>
              <p className=" flex items-center gap-2 mt-3 font-bold underline cursor-pointer hover:text-primary">
                <HiOutlineCubeTransparent /> Spam
              </p>
              <p className=" flex items-center gap-2 mt-3 font-bold underline cursor-pointer hover:text-primary">
                <AiFillDelete /> Delete
              </p>
            </div>
          </div>

          <div class="col-span-9 ">
            <div className="shadow-lg px-10 flex items-center justify-between py-[14px]">
              <h1 className="text-sm">1-10 from 23</h1>
              <div className="flex">
                <FaChevronLeft />
                <FaChevronRight className="mr-10" />
                <FaHistory />
                <FaExpandArrowsAlt className="mr-8 ml-3" />
              </div>
            </div>
            <div className=" pr-10">
              <input
                className="mt-7 p-3 w-full"
                type="text"
                placeholder="Enter Your Keyword For Email Search.."
              />
            </div>
            <div className="flex justify-between py-3 px-8 bg-black mt-3">
              <div className="flex gap-4">
                <button className="flex items-center gap-1 bg-accent py-2 px-4 text-white uppercase font-bold rounded-md">
                  <BsFillArchiveFill />
                  Archive
                </button>
                <button className="flex items-center gap-1 bg-orange-500 py-2 px-4 text-white uppercase font-bold rounded-md">
                  <AiFillStar />
                  Start
                </button>
              </div>
              <button className="flex items-center gap-1 bg-primary py-2 px-4 text-white uppercase font-bold rounded-md">
                <AiFillDelete />
                Delete
              </button>
            </div>

            <div className="my-9 mx-10">
              <div className="grid grid-cols-10 bg-slate-50 rounded-md ">
                <div className="col-span-3 flex pl-5 pt-7 gap-2">
                  <input type="checkbox" className="checkbox" />
                  <h1 className="font-bold">Barlina Maza</h1>
                </div>
                <div className="col-span-4 py-7 flex gap-4">
                  <div className="w-[1px] h-[50px] bg-slate-400"></div>
                  <div>
                    <h1 className="font-semibold">Welcome To Our Services</h1>
                    <p className="text-sm">
                      By checking this box and continuing.
                    </p>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <p className="text-orange-600 underline text-sm">
                    {' '}
                    1 Hour Ago
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-10 bg-slate-50 rounded-md mt-3 ">
                <div className="col-span-3 flex pl-5 pt-7 gap-2">
                  <input type="checkbox" className="checkbox" />
                  <h1 className="font-bold">Barlina Maza</h1>
                </div>
                <div className="col-span-4 py-7 flex gap-4">
                  <div className="w-[1px] h-[50px] bg-slate-400"></div>
                  <div>
                    <h1 className="font-semibold">Welcome To Our Services</h1>
                    <p className="text-sm">
                      By checking this box and continuing.
                    </p>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <p className="text-orange-600 underline text-sm">
                    {' '}
                    1 Hour Ago
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-10 bg-slate-50 rounded-md mt-3 ">
                <div className="col-span-3 flex pl-5 pt-7 gap-2">
                  <input type="checkbox" className="checkbox" />
                  <h1 className="font-bold">Barlina Maza</h1>
                </div>
                <div className="col-span-4 py-7 flex gap-4">
                  <div className="w-[1px] h-[50px] bg-slate-400"></div>
                  <div>
                    <h1 className="font-semibold">Welcome To Our Services</h1>
                    <p className="text-sm">
                      By checking this box and continuing.
                    </p>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <p className="text-orange-600 underline text-sm">
                    {' '}
                    1 Hour Ago
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-10 bg-slate-50 rounded-md mt-3 ">
                <div className="col-span-3 flex pl-5 pt-7 gap-2">
                  <input type="checkbox" className="checkbox" />
                  <h1 className="font-bold">Barlina Maza</h1>
                </div>
                <div className="col-span-4 py-7 flex gap-4">
                  <div className="w-[1px] h-[50px] bg-slate-400"></div>
                  <div>
                    <h1 className="font-semibold">Welcome To Our Services</h1>
                    <p className="text-sm">
                      By checking this box and continuing.
                    </p>
                  </div>
                </div>
                <div className="col-span-3 flex justify-center items-center">
                  <p className="text-orange-600 underline text-sm">
                    {' '}
                    1 Hour Ago
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InboxPro;
