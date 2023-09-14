import React from 'react';

const NewBusinessSales = () => {
  return (
    <div className="mt-20">
      <div className="p-7">
        <div className="flex items-center my-5">
          <div className="h-12 w-1 bg-primary"></div>
          <h1 className="ml-8 text-3xl font-bold">Pricing Package </h1>
        </div>

        <div className="mt-32 bg-white  rounded-xl shadow-lg pb-36">
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
          <div className="grid md:grid-cols-3 gap-10 mx-7">
            <div className="border-2 border-neutral hover:-mt-6 hover:duration-300 duration-300">
              <h1 className="p-7 text-4xl font-bold bg-zinc-500 text-white">
                Free Promo
              </h1>
              <p className="p-3 bg-neutral text-white font-bold">
                PRESENTATION
              </p>
              <p className="px-6 mt-2 font-semibold">Basic Profile</p>
              <hr className="my-4" />
              <p className="px-6 mt-2 font-semibold">Upload up to one Photo</p>
              <hr className="my-4" />
              <p className="px-6 mt-2 font-semibold">Manage your promo 24/7</p>
              <hr className="my-4" />
              <div className="px-6">
                <button className="bg-zinc-500 w-full py-3 text-white font-bold text-xl uppercase rounded-md mb-14">
                  Select
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBusinessSales;
