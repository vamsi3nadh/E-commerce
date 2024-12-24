// import React from 'react'

import { assets } from "../assets/assets";
import Newsletterbox from "../components/Newsletterbox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mg-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500 ">
            54709 Willims Station <br /> sul wadhuhiuh{" "}
          </p>
          <p className="text-gray-500">
            Tel: (414) 6516451 <br /> Email: jgsduv@gmail
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500 ">
            Learn More about our teams job openings
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs{" "}
          </button>
        </div>
      </div>
      <Newsletterbox />
    </div>
  );
};

export default Contact;
