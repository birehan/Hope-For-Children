// HomePage.tsx
import React, { useEffect } from "react";
import Header from "../components/header/Header";
import { Helmet } from "react-helmet";
import { Programthematics } from "../data/thematicData";
import { useLocation } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const ProgramsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      console.log("hash: ", location.hash);
      const targetElement = document.getElementById(location.hash.substr(1)); // Remove the "#" from the hash
      console.log("targetElement: ", targetElement);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }
  }, [location.hash]);

  return (
    <Header>
      <Helmet>
        <title>Hope For Children</title>
      </Helmet>
      {/* <Landing /> */}
      <div className="flex flex-col gap-16 my-16">
        <div className="flex flex-col gap-4 px-6">
          <h1 className="text-center text-4xl lg:text-5xl text-primaryColor font-bold">
            Our Programs
          </h1>

          <div className="mx-auto mt-4 grid max-w-[70rem] gap-10  grid-cols-1">
            {Programthematics.map((thematic, index) => {
              return (
                <div
                  className="flex flex-col  shadow-md p-4 lg:p-8 rounded-md bg-white"
                  key={index}
                  id={thematic.id}
                >
                  <dt className="flex items-center gap-x-3 text-2xl font-semibold leading-7 text-primaryColor">
                    {thematic.name}
                  </dt>

                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 gap-2">
                    <p className="flex-auto  text-lg">{thematic.description}</p>
                    <ul>
                      {thematic.points.map((point, index) => {
                        return (
                          <li
                            key={index}
                            className="flex-auto flex flex-row gap-2 items-center ml-4 text-lg"
                          >
                            <AiFillCheckCircle className="text-primaryColor" />{" "}
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </dd>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ProgramsPage;
