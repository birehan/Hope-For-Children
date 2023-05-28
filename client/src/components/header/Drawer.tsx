import React, { Dispatch, SetStateAction } from "react";
import {
  Drawer,
  List,
  Button,
  Stack,
  Typography,
  ListItem,
  Link,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";
// import { useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "@mui/icons-material/Logout";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import Logo from "../assets/logo.png";
import links from "./HeaderLinks";
import AchievementDropDown from "./AchievementDropDown";

const useStyles = () => {
  return {
    drawerSite: {
      color: "black",
      fontSize: { lg: "27px", md: "22px" },
      textDecoration: "none",
      p: "5px 0",
      "&:hover": {
        cursor: "pointer",
        color: "#4d99b6",
        transition: "300ms all ease-in",
      },
      width: "100%",
    },
  };
};

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
          <ListItem sx={{ flexDirection: "column" }}>
            <Link sx={classes.drawerSite}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  {" "}
                  <Link
                    onClick={() => {
                      setOpenDrawer(false);
                    }}
                    sx={{
                      textDecoration: "none",
                      color: "#078989",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    <Stack
                      sx={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        alt="logo"
                        src="/assets/images/logo.jpg"
                        sx={{
                          width: "40px",
                          height: "40px",
                        }}
                      ></Box>

                      <Typography
                        sx={{
                          fontSize: "22px",
                          color: "#00b1f4",
                        }}
                      >
                        Hope For Children
                      </Typography>
                    </Stack>
                  </Link>
                </Box>

                <CloseIcon onClick={() => setOpenDrawer(false)} />
              </Stack>
            </Link>
          </ListItem>
          {links.map((link, index) => {
            if (link.name === "Achievements") {
              return <AchievementDropDown IsSmallScreen={true} key={index} />;
            }
            return (
              <Stack key={index}>
                <ListItem>
                  <Link
                    onClick={() => {
                      setOpenDrawer(false);
                    }}
                    sx={{
                      color: "black",
                      fontSize: { lg: "27px", md: "22px" },
                      textDecoration: "none",
                      p: "5px 0",

                      "&:hover": {
                        cursor: "pointer",
                        color: "#4d99b6",
                        transition: "300ms all ease-in",
                      },
                      width: "100%",
                    }}
                  >
                    <Typography
                      sx={{
                        // color: "white",
                        fontSize: "1.2rem",
                        fontWeight: "400",
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                </ListItem>
                <Divider />
              </Stack>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
