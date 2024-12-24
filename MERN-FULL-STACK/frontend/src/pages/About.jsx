// import React from 'react'

import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox.jsx";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            suscipit fuga laborum! At iste veniam soluta eum provident aperiam?
            Sit ratione pariatur aperiam expedita soluta alias saepe ducimus
            facere minima?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            repudiandae quo ipsum eum deserunt dignissimos alias aspernatur
            fugit itaque ex! Placeat, maiores atque. Fugiat quaerat suscipit
            quos corporis placeat asperiores.
          </p>
          <b className="text-gray-800 ">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quod
            laborum, adipisci vel totam illum ad nam asperiores molestiae
            consequatur veritatis corporis, neque sit eveniet ab. Maxime ab
            incidunt fugiat.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            dolor ipsam odio ipsum, corporis nemo ex adipisci, cumque culpa
            voluptas accusantium quas sunt ea beatae perferendis quo.
            Voluptatum, laudantium veritatis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Conveinience :</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            dolor ipsam odio ipsum, corporis nemo ex adipisci, cumque culpa
            voluptas accusantium quas sunt ea beatae perferendis quo.
            Voluptatum, laudantium veritatis.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            dolor ipsam odio ipsum, corporis nemo ex adipisci, cumque culpa
            voluptas accusantium quas sunt ea beatae perferendis quo.
            Voluptatum, laudantium veritatis.
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
