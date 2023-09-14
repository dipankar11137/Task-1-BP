import React, { useRef } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import Footer from '../../../Share/Footer';

const MyProfile = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    // Trigger the file input by clicking it
    fileInputRef.current.click();
  };

  const handleFileChange = e => {
    // Handle the selected file here
    const selectedFile = e.target.files[0];
    console.log('Selected file:', selectedFile);
  };
  return (
    <div>
      <div className="pt-20 px-7 pb-20">
        <div className="flex justify-between my-5 pt-5">
          <div className="flex items-center">
            <div className="h-12 w-1 bg-primary"></div>
            <h1 className="ml-8 text-3xl font-bold">My Profile </h1>
          </div>
          <button className="btn btn-accent mr-10 btn-sm text-white shadow-lg">
            Edit
          </button>
        </div>
        <div className="flex gap-x-8 bg-white shadow-xl mt-20 rounded-md px-5 py-10 pb-20">
          <div>
            <p className="text-xl  mb-3 font-thin">Profile Photo</p>
            <div className="border-[1px] border-primary w-28 h-28 rounded-full pl-4 pt-2">
              <FaUserPlus className="text-primary text-6xl ml-4" />
              <p>Add Photo</p>
            </div>
            <div>
              <button
                onClick={handleButtonClick}
                className="btn btn-primary btn-sm ml-4 mt-2"
              >
                Browse
              </button>
              {/* Hide the file input element */}
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-8 w-full mr-10 ">
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">First Name: </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Last Name </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Phone Number </span>
              </label>
              <input
                type="phone"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Email Address </span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div>
              <button className="btn btn-md btn-accent text-white ml-5 px-7 ">
                Save
              </button>
            </div>
          </div>
        </div>

        <div className=" bg-white shadow-xl mt-20 rounded-md px-5 py-10 pb-20">
          <div className=" grid grid-cols-2 gap-8 w-full mr-10 ">
            <p className="text-xl font-semibold">Change Password </p>
            <p className="text-xl font-semibold">Change Email Address </p>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Email Address: </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">
                  Your Registred Email address:{' '}
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Current Password: </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">New Email Address: </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">New Password : </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Repeat New Email Address: </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className=" w-full ">
              <label className="label">
                <span className="label-text">Reenter new password: </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
            <div className="mt-8">
              <button className="btn btn-md btn-accent text-white ml-5 px-7 ">
                Save
              </button>
            </div>
            <div>
              <button className="btn btn-md btn-accent text-white ml-5 px-7 ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
