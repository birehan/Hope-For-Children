import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./projectStyles.css";
import styles from "../../../styles/projectStyles.module.css";

// import required modules
import { Keyboard, Pagination } from "swiper";
import { Box } from "@mui/material";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <Box sx={{ height: "600px", width: { xs: "90vw", lg: "80vw" } }}>
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
        className={`${styles.swiper}`}
      >
        {projects.map(({ imageUrl, title, description }, index: number) => {
          return (
            <ProjectCard
              key={index}
              imageUrl={imageUrl}
              title={title}
              description={description}
            />
          );
        })}
      </Swiper>
    </Box>
  );
};

export default ProjectsList;
