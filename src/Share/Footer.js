import React from 'react';

const Footer = () => {
  return (
    <footer className="footer  p-4 bg-white text-base-content mt-40 pt-14 ">
      <div className="flex justify-between px-10 w-full items-center pb-4">
        <p>Business Media Group 2020.All rights reserved</p>
        <div className="flex gap-5">
          <p className="cursor-pointer hover:text-primary">Terms of Service</p>
          <p className="cursor-pointer hover:text-primary">Privacy Policy</p>
          <p className="cursor-pointer hover:text-primary">Contact us</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
