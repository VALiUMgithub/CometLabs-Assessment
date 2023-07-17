import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <img src="/assets/logo-purple.svg" alt="footer lgo" />
          <p className="text-center lg:text-start">20 Osgood Rd, Milford, NH 03055, USA +1283871239190213021</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl hover:cursor-pointer font-medium">Company</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Careers</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Teachers</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Support</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Contact</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Openings</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Partners</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Email</p>
        </div>
        <div className="flex flex-col sm:hidden items-center lg:items-start gap-5">
          <p className="text-xl hover:cursor-pointer font-medium">Solutions</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Ecommerce</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Agency</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Small Businesses</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Professional Services</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Lead Generation</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Social Ads</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Email Marketing</p>
        </div>
        <div className="hover:cursor-pointer flex flex-col items-center lg:items-start gap-5">
          <p className="hover:cursor-pointer hover:rounded text-xl font-medium">Product</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">Courses</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">Pricing</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">Blog</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">SaaS</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">Smart Traffic</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">Smart Copy</p>
          <p className="hover:cursor-pointer hover:rounded px-2 hover:bg-black/5 text-base">Landing Pages</p>

        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium px-2">Legal</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Terms & Conditions</p>
          <p className="text-base hover:cursor-pointer hover:rounded px-2 hover:bg-black/5">Privacy policy</p>
        </div>
        <div className="flex items-center gap-5">
                <BsFacebook className="text-3xl text-gray-500 hover:cursor-pointer hover:rounded"/>
                <BsTwitter className="text-3xl text-gray-500 hover:cursor-pointer hover:rounded"/>
                <BsInstagram className="text-3xl text-gray-500 hover:cursor-pointer hover:rounded"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
