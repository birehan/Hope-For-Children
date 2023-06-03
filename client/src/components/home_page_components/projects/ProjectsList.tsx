import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "../../../../styles/projectStyles.module.css";

import { Keyboard, Pagination } from "swiper";
import { Box } from "@mui/material";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <Box
      sx={{ height: "540px", width: { xs: "95vw", md: "90vw", lg: "85vw" } }}
    >
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
          },

          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}
        className={`${styles.swiper} custom-swiper`}
      >
        {projects.map(({ imageUrl, title, description }, index: number) => {
          return (
            <SwiperSlide key={index}>
              <ProjectCard
                imageUrl={imageUrl}
                title={title}
                description={description}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ProjectsList;
