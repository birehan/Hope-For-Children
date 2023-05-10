import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import thematic from "../common/images/thematic.png";
const popin = Poppins({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
});

const ThematicAreas = () => {
  return (
    <div>
      <div
        className={`flex flex-col ${popin.style.fontFamily}  items-center max-w-[1400px] m-auto`}
      >
        <h1 className="text-[#00B1F4] text-[50px] my-2 not-italic">
          Thematic Areas
        </h1>
        <p
          className={`text-center text-[18px] ${popin.style.fontFamily} tracking-wider not-italic text-[#010101]
          max-w-[1200px] h-[168px] font-poppins  font-[400] text-[18px] leading-[232.5%] text-center
          text-[rgba(1, 1, 1, 0.74)] letter-spacing-[0.055em]`}
        >
          HFC has been injecting multifaceted on different areas to provide
          holistic services to poor community members, PLWHA, OVC and their care
          givers. As the result, the organization gained significant experiences
          with regard to child-centered community based development approach.{" "}
        </p>
      </div>
      <div className="relative" >
        <div className="block md:flex max-w-[1100px] m-auto thematic-card my-6">
          <div className="flex-1">
            <Image className="w-full h-full" src={thematic} alt="" />
          </div>
          <div className="flex-1 md:px-0 py-8 pr-4 mx-6 mr-3">
            <h1 className="text-[#00B1F4] text-2xl not-italic ">Education</h1>
            <p className="my-4 font-poppins  text-base leading-[2.23] tracking-[0.03em] text-[rgba(1, 1, 1, 0.74)]">
              HFC is committed to providing comprehensive support for education,
              from kindergarten to university level. Their support includes
              school materials, uniforms, school fees, and tutorials. By
              providing these resources, HFC ensures that children have the
              tools they need to succeed in school.
            </p>
            <p className="font-poppins text-base leading-[2.23] trackzsing-[0.03em] text-[rgba(1, 1, 1, 0.74)]">
              Thanks to HFC, more children are able to attend school and achieve
              their dreams.
            </p>
            <button className="text-[#00B1F4] border border-[#00B1F4] rounded-[20px] p-2 w-[10rem] mt-5">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThematicAreas;
