import React from "react";
import YouTube from "react-youtube";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { vedios } from "../../../common/data";

function Videos() {
  const opts = {
    height: "240",
    width: "240",
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  return (

    <div className="max-w-[1200px]  flex justify-center flex-wrap gap-5 m-auto">
      {vedios.map((ved) => (
        <div className="box-border flex flex-col items-center w-[40vh] justify-center bg-[#FEFCFB] border-2 border-gray-200 rounded-lg p-5">
          <div className="rounded-lg">
            <YouTube videoId={ved.vedioId} opts={opts} />
          </div>
          <div className="flex flex-col justify-center items-center px-2">
            <h1 className="text-xl my-3 font-bold">{ved.title}</h1>
            <p className="text-center">
              A ceremony where children were welcomed from different parts of
              Ethiopia.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videos;