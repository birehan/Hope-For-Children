import { useRouter } from "next/router";
import React, { useState } from "react";
import { gallery_tabs } from "../../../common/data";
import Images from './Images'
import Videos from "./Videos";

const Gallery = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Children");

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col justify-center items-center p-10">
      <div className="flex flex-wrap justify-center items-center gallerytab bg-white-primary shadow-lg rounded-lg p-5 gap-3">
        {gallery_tabs.map((tab) => (
          <button
            className={`w-[143px] ${
              tab.name === activeTab ? "bg-[#00B1F4] text-white" : ""
            } p-[8px] rounded-lg`}
            onClick={() => handleTabChange(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-[3rem]">
        {activeTab === "Children" && <Images/>}
        {activeTab === "Ceremony" && <p>Ceremony</p>}
        {activeTab === "Videos" && <Videos/>}
        {activeTab === "Images" && <p>Images</p>}
        {activeTab === "Youth" && <p>Youth</p>}
        {activeTab === "Achievement" && <p>Achievement</p>}
        {activeTab === "All" && <p>All</p>}
      </div>
    </div>
  );
};

export default Gallery;
