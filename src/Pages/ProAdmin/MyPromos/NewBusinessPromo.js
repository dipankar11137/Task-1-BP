import React from 'react';
import { RxCross2, RxDotFilled } from 'react-icons/rx';
import Footer from '../../../Share/Footer';

const NewBusinessPromo = () => {
  return (
    <div className="mt-20">
      <div className="p-7">
        <div className="flex items-center my-5">
          <div className="h-12 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold">Pricing Package </h1>
        </div>

        <div className="mt-32 bg-white  rounded-xl shadow-lg pb-36">
          <div className="flex justify-end">
            <div className=" border-2 border-blue-50 right-[50px] -mt-6 bg-accent h-12 w-12 px-[10px] py-[11px] rounded-full shadow-md shadow-black">
              <RxCross2 className="text-2xl  text-white " />
            </div>
          </div>
          <h1 className="text-center text-4xl font-bold pt-8">
            Please Select Your Campaign
          </h1>
          <div className="flex justify-center gap-x-2 mt-5 ">
            <button className=" bg-accent py-5 px-4 rounded-[4px] text-white text-lg uppercase font-semibold">
              Monthly
            </button>
            <button className=" bg-neutral py-5 px-4 rounded-[4px] text-white text-lg uppercase font-semibold">
              annually
            </button>
          </div>
          <hr />
          <p className="text-center my-5 text-sm">
            Save Up to 50% with Annual Subscriptions
          </p>
          {/* cart */}

          <div className="grid md:grid-cols-2 gap-10 mx-40 ml-40 ">
            {/* cart 1 */}

            <div className=" hover:-mt-6 hover:duration-300 duration-300">
              <h1 className="p-7 text-4xl font-bold bg-accent text-white text-center">
                Showcase
              </h1>
              <h1 className="px-7  py-2 text-4xl font-bold bg-zinc-500 text-white text-center">
                $10 <br /> <span className="text-sm">/month</span>
              </h1>
              <div className="bg-neutral px-[1px]">
                <p className="bg-yellow-600 text-white px-3 py-2 border-b-2 border-white">
                  PRESENTATION
                </p>
                <p
                  className=" text-white px-3 py-2 border-b-[2px]
                    2 border-white"
                >
                  Full business profile
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Upload Your Biz Logo
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Upload up to Ten Photo
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Upload up to THree videos
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Manage Your Promo 24/7
                </p>
                <div className="px-4">
                  <button className="px-3 py-2 bg-accent my-3 ml-2  rounded-2xl text-white font-semibold uppercase text-sm">
                    view Sample Business Profile
                  </button>
                  <button className="bg-accent w-full py-3 text-white font-bold text-xl uppercase rounded-sm mb-10 mt-4">
                    Select
                  </button>
                </div>
              </div>
            </div>
            {/* cart 3 */}
            <div className="border-2 border-neutral hover:-mt-6 hover:duration-300 duration-300">
              <h1 className="p-7 text-4xl font-bold bg-accent text-white text-center">
                Showcase Plus
              </h1>
              <h1 className="px-7 bg-red-600  py-2 text-4xl font-bold  text-white text-center">
                $29 <br /> <span className="text-sm">/month</span>
              </h1>
              <div className="bg-neutral px-[1px]">
                <p className="bg-yellow-600 text-white px-3 py-2 border-b-2 border-white">
                  BUSINESS PRESENTATION
                </p>
                <p
                  className=" text-white px-3 py-2 border-b-[2px]
                    2 border-white"
                >
                  Full business profile
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Upload Your Biz Logo
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Upload up to 10 photos
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Upload up to 3 videos
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Manage Your Promo 24/7
                </p>
                <p className="bg-yellow-600 text-white px-3 py-2 border-b-2 border-white">
                  Video Creation
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Select from our video templates. Our team will produce a video
                  for you.
                </p>
                <p className="bg-yellow-600 text-white px-3 py-2 border-b-2 border-white">
                  Video Features
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" /> Your Promo
                  Details
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" /> Your Business
                  Logo
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" /> Your Business
                  Photos
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" />
                  Music
                </p>
                <p className="bg-yellow-600 text-white px-3 py-2 border-b-2 border-white">
                  Social Marketing
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white">
                  Promoting your business on-Business Market HUB social sites.
                </p>
                <p className="bg-yellow-600 text-white px-3 py-2 border-b-2 border-white">
                  Social Site
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" />
                  YouTube
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" />
                  Facebook
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" />
                  Instagram
                </p>
                <p className="flex items-center text-white px-3 py-2 border-b-2 border-white font-semibold">
                  <RxDotFilled className="text-3xl font-bold" />
                  Pinterest
                </p>
                <p className=" text-white px-3 py-2 border-b-2 border-white font-semibold">
                  Manage your promo 24/7
                </p>

                <div className="px-4 text-center">
                  <button className="px-3 py-3 bg-yellow-600 my-3 ml-2 border-b-2 border-white  rounded-2xl text-white font-semibold uppercase text-sm">
                    view Sample Business Profile
                  </button>
                  <button className="px-3 py-3 bg-yellow-600 my-3 ml-2 border-b-2 border-white  rounded-2xl text-white font-semibold uppercase text-sm">
                    Sample Video Profile
                  </button>
                  <button className="bg-yellow-600 w-full py-3 text-white font-bold text-xl uppercase rounded-sm mb-10 mt-4">
                    Select
                  </button>
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

export default NewBusinessPromo;
