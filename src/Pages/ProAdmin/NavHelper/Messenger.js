import React from 'react';

const Messenger = () => {
  return (
    <div className="w-[350px] py-3 px-2">
      <h1 className="text-2xl font-semibold ">Messenger</h1>
      <hr className="my-2" />
      <div className="form-control bg-slate-200 p-2 rounded-lg">
        <input
          type="text"
          placeholder="Search Message"
          className="input input-bordered w-24 md:w-auto"
        />
      </div>

      <div className="py-2 px-1 mt-4">
        <div className="flex gap-x-3">
          <img
            className="w-12 h-12 rounded-full"
            src="https://cdn.vox-cdn.com/thumbor/fcs0WbDirWP92aQW9IVaZIo2I4g=/0x0:4493x4993/1200x800/filters:focal(1777x1486:2495x2204)/cdn.vox-cdn.com/uploads/chorus_image/image/72242742/1252451404.0.jpg"
            alt=""
          />
          <div>
            <h1 className="font-bold">Amelio Joly</h1>
            <p className="text-sm">The standard chunk or lorem</p>
          </div>
          <p className="ml-12 font-semibold text-end"> 1 m</p>
        </div>
        <div className="flex gap-x-3 mt-5">
          <img
            className="w-12 h-12 rounded-full"
            src="https://staticg.sportskeeda.com/editor/2022/12/7e447-16718039576903-1920.jpg?w=840"
            alt=""
          />
          <div>
            <h1 className="font-bold">Amelio Joly</h1>
            <p className="text-sm">The standard chunk or lorem</p>
          </div>
          <p className="ml-12 font-semibold text-end"> 1 m</p>
        </div>
        <div className="flex gap-x-3 mt-5">
          <img
            className="w-12 h-12 rounded-full"
            src="https://i.pinimg.com/236x/4b/44/8a/4b448a5d0df920526c48c073ada9d0ba.jpg"
            alt=""
          />
          <div>
            <h1 className="font-bold">Amelio Joly</h1>
            <p className="text-sm">The standard chunk or lorem</p>
          </div>
          <p className="ml-12 font-semibold text-end"> 1 m</p>
        </div>
        <div className="flex gap-x-3 mt-5">
          <img
            className="w-12 h-12 rounded-full"
            src="https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/zedkTzWYn_xDNBNwqu7auyIotTI=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/WBF3SBPITZEHHTTOFQUSFCAGEU.jpg"
            alt=""
          />
          <div>
            <h1 className="font-bold">Amelio Joly</h1>
            <p className="text-sm">The standard chunk or lorem</p>
          </div>
          <p className="ml-12 font-semibold text-end"> 1 m</p>
        </div>
        <div className="flex gap-x-3 mt-5">
          <img
            className="w-12 h-12 rounded-full"
            src="https://cdn.vox-cdn.com/thumbor/fcs0WbDirWP92aQW9IVaZIo2I4g=/0x0:4493x4993/1200x800/filters:focal(1777x1486:2495x2204)/cdn.vox-cdn.com/uploads/chorus_image/image/72242742/1252451404.0.jpg"
            alt=""
          />
          <div>
            <h1 className="font-bold">Amelio Joly</h1>
            <p className="text-sm">The standard chunk or lorem</p>
          </div>
          <p className="ml-12 font-semibold text-end"> 1 m</p>
        </div>
      </div>
    </div>
  );
};

export default Messenger;
