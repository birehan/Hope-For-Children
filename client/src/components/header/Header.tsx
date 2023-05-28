import {
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "./Drawer";
import links from "./HeaderLinks";
import Link from "next/link";
import Image from "next/image";
import AchievementDropDown from "./AchievementDropDown";

const useStyles = () => {
  return {
    header: {
      // position: "absolute",
      // top: 0,
      // left: 0,
      // right: 0,
      // height: "80px",
      // zIndex: "100",
      // background: "rgba(70, 69, 81, 0.62)", // or any other color you want for the background
      // backdropFilter: "blur(5px)",
      // overflowX: "hidden", // or overflowX: "scroll" if you want to always show the horizontal scrollbar
      position: "fixed",
      top: 0,
      height: "75px",
      width: "100%",
      zIndex: 100,
      background: "rgba(70, 69, 81, 0.62)",
      backdropFilter: "blur(5px)",
    },
  };
};

const Header = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={classes.header}>
      {openDrawer && (
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      )}
      {isMatch ? (
        <Stack
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            height: "100%",
            padding: "10px 20px",
          }}
        >
          <Link href="/">
            <Box
              component="img"
              alt="logo"
              src="/assets/images/logo2.png"
              sx={{ width: "50px", height: "50px" }}
            ></Box>
          </Link>

          <IconButton
            sx={{ color: "white" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      ) : (
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: "100%",
            padding: { md: "10px 20px", lg: "10px 100px" },
            color: "white",
          }}
        >
          <Stack
            sx={{ flexDirection: "row", gap: "10px", alignItems: "center" }}
          >
            <Image
              src="/assets/images/logo2.png"
              alt="log"
              height="50"
              width="50"
            />
            <Typography
              sx={{
                color: "#00B1F4",
                fontStyle: "normal",

                lineHeight: "42px",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              Hope For Children
            </Typography>
          </Stack>

          <Stack
            sx={{
              flexDirection: "row",
              gap: { md: "15px", lg: "20px", xl: "50px" },
            }}
          >
            {links.map((link, index) => {
              if (link.name === "Achievements") {
                return (
                  <AchievementDropDown IsSmallScreen={false} key={index} />
                );
              }
              return (
                <Box
                  key={index}
                  sx={{
                    fontWeight: 500,
                    fontSize: { md: "20px", lg: "22px", xl: "24px" },

                    "&:hover": {
                      cursor: "pointer",
                      color: "#00B1F4",
                      transition: "all 400ms ease",
                    },
                  }}
                >
                  {link.name}
                </Box>
              );
            })}
          </Stack>

          <Link href="/donate" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                background: "#00B1F4",
                textDecoration: "none",
                borderRadius: "30px",
                color: "white",
                padding: "10px 20px",
                border: "1px solid #00B1F4",

                "&:hover": {
                  color: "#00B1F4",
                  border: "1px solid #00B1F4",
                  transition: "400ms all ease-in-out",
                },
              }}
            >
              Donate Now
            </Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
};
export default Header;
