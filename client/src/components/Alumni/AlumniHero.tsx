import React from "react";
import Image from "next/image";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import gallery from "../../../public/assets/images/landing1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation } from "swiper";
const AlumniHero = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      spaceBetween={0}
      slidesPerView={"auto"}
      keyboard={true}
      modules={[Autoplay, Navigation, Keyboard]}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
    >
      <SwiperSlide>
        <div className="min-h-[60vh] lg:max-h-[60vh]">
          <div className="w-full relative">
            <Image
              className="w-full h-[60vh]  lg:max-h-[60vh] object-cover"
              src={gallery}
              alt="a child"
            />
          </div>
          <div className="w-full h-[60vh] lg:max-h-[60vh] bg-black/40 flex self-auto justify-center items-center absolute top-0  text-white text-center">
            <div className="flex flex-col gap-8">
              <div className="flex items-center  gap-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  HFC
                </h1>
                <h1 className="text-[#00B1F4] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  successfull students
                </h1>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AlumniHero;
