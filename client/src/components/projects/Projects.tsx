import { Stack, Typography } from "@mui/material";
import ProjectsList from "./ProjectsList";
import useStyles from "./styles";

const Projects = () => {
  const classes = useStyles();
  return (
    <Stack sx={classes.projectContainer}>
      <Typography sx={classes.projectText} variant="h4">
        Our Projects
      </Typography>

      <Stack sx={classes.projectListContainer}>
        <ProjectsList />
      </Stack>
    </Stack>
  );
};

export default Projects;
