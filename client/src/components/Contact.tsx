import Image from "next/image";
import React from "react";
import bg from "../../public/assets/images/stats.png";
import { Map, Marker } from "pigeon-maps";

const Contact = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <Image
          src={bg}
          className="w-full h-full object-cover mix-blend-overlay"
          alt="landing page"
        />
      </div>
      <div className="w-full h-full flex items-center mx-auto bg-transparent relative">
        <div className="w-[95%] md:w-[90%] lg:w-[65%] rounded-md bg-white mx-auto flex gap-">
          <div className="p-6 flex-1">
            <h1 className="text-3xl">
              Get In <span className="text-[#00B1F4]">Touch</span>
            </h1>
            <p className="my-2">
              Give a hope for homeless and be some one that creates happiness
              for someone who needs
            </p>
            <form className="flex flex-col gap-3">
              <input
                type="text"
                className="border mt-3 rounded-md p-[18px]"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="border rounded-md p-[18px]"
                placeholder="Email"
                required
              />
              <textarea
                className="border rounded-md p-[18px]"
                rows={3}
                placeholder="message"
              />
              <button className="bg-[#00B1F4] rounded-md p-[10px] text-white">
                send
              </button>
            </form>
          </div>
          <div className="flex-1 rounded-r-md ">
            <Map  defaultCenter={[9.05811220267937, 38.73191444691774]} defaultZoom={20}>
              <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
