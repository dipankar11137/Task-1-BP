import React from 'react';
import { AiFillDelete, AiFillStar, AiOutlineMail } from 'react-icons/ai';
import { BiPaperPlane } from 'react-icons/bi';
import { HiOutlineCubeTransparent } from 'react-icons/hi';
import { RiDraftFill } from 'react-icons/ri';
import Footer from '../../../Share/Footer';

const Create = () => {
  return (
    <div>
      <div className="mt-24 p-7 w-full">
        <div className="flex items-center">
          <div className="h-12 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold"> Create Email </h1>
        </div>

        <div class="grid grid-cols-12 gap-12 bg-white mt-16 rounded-xl pb-20">
          <div class="col-span-3 ">
            <button className="bg-accent hover:bg-primary py-3 w-full uppercase rounded-l-md rounded-b-none text-white font-bold flex justify-center gap-2 ">
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
            <h1 className="text-2xl font-bold pt-1">Compose Email</h1>
            <p className="text-sm">Enter your details related Emails.</p>
            <div className="mt-10 mr-16">
              <input
                type="text"
                placeholder="To*"
                className="border-[1px] w-full rounded-md py-3 px-4 shadow-sm"
              />
              <input
                type="text"
                placeholder="Cc"
                className="border-[1px] w-full rounded-md py-3 px-4 shadow-sm mt-3"
              />
              <input
                type="text"
                placeholder="Bcc"
                className="border-[1px] w-full rounded-md py-3 px-4 shadow-sm mt-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="border-[1px] w-full rounded-md py-3 px-4 shadow-sm mt-3"
              />
              <textarea
                type="text"
                placeholder="Note"
                className="border-[1px] h-32 w-full rounded-md py-3 px-4 shadow-sm mt-3"
              />

              <div className="mt-5">
                File Input:
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full max-w-xs ml-2"
                />
              </div>

              <button className="bg-primary mt-10 py-4 px-8 rounded-md uppercase font-bold text-white flex items-center gap-2">
                <BiPaperPlane className="2xl" /> Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Create;
