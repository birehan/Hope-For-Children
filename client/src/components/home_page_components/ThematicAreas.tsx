import Image from "next/image";
import { Poppins } from "next/font/google";
import thematic from "../../../common/images/thematic.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { thematics } from "../../../common/data";
import { useEffect, useRef, useState } from "react";
const popin = Poppins({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
});

const ThematicAreas = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const splideRef = useRef(null);

  useEffect(() => {
    if (splideRef.current) {
      splideRef.current.go(slideIndex);
    }
  }, [slideIndex]);

  const handlePreviousSlide = () => {
    setSlideIndex((slideIndex) =>
      slideIndex === 0 ? thematics.length - 1 : slideIndex - 1
    );
  };

  const handleNextSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === thematics.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="my-5">
      <div
        className={`flex flex-col ${popin.style.fontFamily}  items-center w-[95%] md:w-[90%] lg:w-[85%] m-auto`}
      >
        <h1 className="text-[#00B1F4] text-[50px] my-2 not-italic text-center">
          Thematic Areas
        </h1>
        <p
          className={`text-center my-5 md:mb-5 text-[18px] ${popin.style.fontFamily} tracking-wider not-italic text-[#010101]
         first-letter:  font-poppins  font-[400] text-[18px] leading-[232.5%] text-center
          text-[rgba(1, 1, 1, 0.74)] letter-spacing-[0.055em] mb-2 md:mb-0`}
        >
          HFC has been injecting multifaceted on different areas to provide
          holistic services to poor community members, PLWHA, OVC and their care
          givers. As the result, the organization gained significant experiences
          with regard to child-centered community based development approach.{" "}
        </p>
      </div>
      <div className="relative w-[95%] md:w-[90%] lg:w-[85%] m-auto">
        <div className="corners w-[100%] m-auto">
        <div className="hidden lg:flex top left rounded-tl-lg"></div>
          <div className="hidden lg:flex top right rounded-tr-lg"></div>
          <div className="hidden lg:flex bottom right rounded-br-lg"></div>
          <div className="hidden lg:flex bottom left rounded-bl-lg"></div>
          <Splide
            options={{
              rewind: true,
              arrows: false,
              pagination: false,
            }}
            aria-label="React Splide Example"
            ref={splideRef}
            onMove={(splide) => {
              setSlideIndex(splide.index);
            }}
          >
            {thematics.map((them) => (
              <SplideSlide>
                <div className="block md:flex w-[100%] lg:w-[96%] m-auto thematic-card my-6">
                  <div className="flex-1">
                    <Image className="w-full h-full" src={thematic} alt="" />
                  </div>
                  <div className="flex-1 md:ml-5">
                    <h1 className="text-[#00B1F4] mt-5 text-3xl not-italic ">
                      {them.title}
                    </h1>
                    <p className="my-4 font-poppins  text-base leading-[2.23] tracking-[0.03em] text-[rgba(1, 1, 1, 0.74)]">
                      {them.desc}
                    </p>
                    <p className="font-poppins text-base leading-[2.23] trackzsing-[0.03em] text-[rgba(1, 1, 1, 0.74)]">
                      {them.desc2}
                    </p>
                    <button className="text-[#00B1F4] border border-[#00B1F4] rounded-[20px] p-2 w-[10rem] my-5">
                      Read More
                    </button>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="flex justify-center items-center mt-2 gap-2">
          <button
            className="border rounded-full bg-gradient-to-r from-slate-300 via-transparent to-slate-300 bg-clip-padding backdrop-filter backdrop-blur-xl shadow-lg p-3"
            onClick={handlePreviousSlide}
          >
            <ArrowBackIos className="text-[#00B1F4]" />
          </button>

          <button
            className="border rounded-full bg-gradient-to-r from-slate-300 via-transparent to-slate-300 bg-clip-padding backdrop-filter backdrop-blur-xl shadow-lg p-3 text-[#00B1F4]"
            onClick={handleNextSlide}
          >
            <ArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThematicAreas;
