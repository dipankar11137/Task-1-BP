import React from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedBusinessSales = () => {
  return (
    <div className="bg-zinc-300">
      <div className="mx-20  mt-10 mb-5 pt-5 pb-10">
        <div className="w-20 h-[3px] bg-[#774E88] mt-5 "></div>
        <h1 className="text-2xl font-bold mt-2 pb-2">
          Featured Business Sales
        </h1>
        <hr className="border-slate-400" />

        <div className="mt-3 ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              '@0.00': {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              '@0.75': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '@1.00': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '@1.50': {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-white shadow-md mb-10">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-white shadow-md">
                <img
                  className="w-full h-52"
                  src="https://i.ibb.co/QNL63DV/thip.png"
                  alt=""
                />
                <p className="bg-[#aaa2b6] text-center">
                  dDeccan light- Estb in 2016
                </p>
                <div className="mt-3 px-2">
                  <h1 className="text-xl font-bold text-slate-800 mb-2">
                    Business Sales
                  </h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Libero molestiae cupiditate at dicta, beatae saepe tenetur
                    enim sint maxime consectetur ex blanditiis nihil quia natus
                    perspiciatis non, minus architecto minima. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Optio, obcaecati!
                  </p>
                  <div className="mt-3 pb-3 flex justify-between">
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Profile
                    </button>
                    <button className="p-1 bg-[#774E88] text-white hover:underline text-sm">
                      View Video
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBusinessSales;
