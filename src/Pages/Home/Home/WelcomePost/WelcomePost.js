import React from 'react';

const WelcomePost = () => {
  return (
    <div className="mx-20  mt-10 mb-5">
      <div className="grid grid-cols-2 gap-5">
        <div className="mt-9">
          <div className="w-20 h-1 bg-[#774E88] mt-5"></div>
          <h1 className="text-2xl font-bold mt-2">Welcome To Business Post</h1>
          <p className="mt-5 text-sm mr-5">
            Business Post is a one-stop shop for aspiring entrepreneurs. Whether
            you are looking to buy a business, sell a business, or acquire a
            franchise, the Business Post is your Business Opportunities Hub. Get
            on board with the best business marketplace portal and find your
            dream business!
          </p>

          <div className="mt-16">
            <button className="py-1 px-4 border-2 border-[#774E88] text-[#774E88] hover:bg-[#774E88] hover:text-white font-bold">
              Buy a Business
            </button>
            <button className="ml-2 py-1 px-4 border-2 border-[#774E88] text-[#774E88] hover:bg-[#774E88] hover:text-white font-bold">
              Sell a Business
            </button>
          </div>
        </div>
        <div>
          <img
            className="md:w-full md:pr-7"
            src="https://www.dev.businesspost.com.au/assets/images/about-us-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomePost;
