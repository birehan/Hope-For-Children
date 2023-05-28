import { Dispatch, SetStateAction } from "react";
import {
  Drawer,
  List,
  Stack,
  Typography,
  ListItem,
  Link,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import links from "./HeaderLinks";
import AchievementDropDown from "./AchievementDropDown";
import useStyles from "./styles";

interface Props {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const DrawerComponent = ({ openDrawer, setOpenDrawer }: Props) => {
  const classes = useStyles();

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem sx={classes.listItem}>
            <Box sx={classes.drawerSite}>
              <Stack sx={classes.drawerContent}>
                <Link href="/" sx={classes.drawerLink}>
                  <Box
                    component="img"
                    alt="logo"
                    src="/assets/images/logo.jpg"
                    sx={classes.logo}
                  ></Box>

                  <Typography sx={classes.title}>Hope For Children</Typography>
                </Link>

                <CloseIcon onClick={() => setOpenDrawer(false)} />
              </Stack>
            </Box>
          </ListItem>
          <Divider />
          {links.map((link, index) => {
            if (link.name === "Achievements") {
              return <AchievementDropDown IsSmallScreen={true} key={index} />;
            }

            return (
              <Stack key={index}>
                <ListItem>
                  <Link href={link.path} sx={classes.link}>
                    <Typography sx={{ fontSize: "1.2rem", fontWeight: "400" }}>
                      {link.name}
                    </Typography>
                  </Link>
                </ListItem>
                <Divider sx={classes.divider} />
              </Stack>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
