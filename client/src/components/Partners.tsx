import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { partners } from "../../common/data";

const Partners = () => {
  return (
    <div className="my-3">
      <div className="w-[100%] flex items-center justify-center">
        <h1 className="text-[40px] text-[#00B1F4] mb-3">Our Partners</h1>
      </div>
      <div className="max-w-[1400px] partners-card m-auto mb-10">
        <Splide
          className="w-full px-20 py-12"
          options={{
            perPage: 6,
            pagination:false,
            paginationKeyboard:true,
            breakpoints: {
              768: {
                perPage: 3,
                padding: "0px 12px",
                gap: "12px",
              },
            },
          }}
        >
          {partners.map((partner) => (
            <SplideSlide>
              <Image className="w-20 h-20 md:mx-16" src={partner} alt="" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Partners;
