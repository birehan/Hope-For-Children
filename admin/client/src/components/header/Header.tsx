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
import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(1100));

  return (
    <Box sx={classes.header}>
      {openDrawer && (
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      )}
      {isMatch ? (
        <Stack sx={classes.smallScreenContainer}>
          <Link href="/">
            <Stack sx={classes.logoContainer}>
              <Box
                component="img"
                alt="logo"
                src="/assets/images/logo2.png"
                sx={{ width: "30px", height: "30px" }}
              ></Box>
              <Typography sx={classes.hopeText}>Hope For Children</Typography>
            </Stack>
          </Link>

          <IconButton
            sx={{ color: "white" }}
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      ) : (
        <Stack sx={classes.largeLogoContainer}>
          <Link href="/">
            <Stack sx={classes.logoContainer2}>
              <Image
                src="/assets/images/logo2.png"
                alt="log"
                height="40"
                width="40"
              />
              <Typography sx={classes.hopeText}>Hope For Children</Typography>
            </Stack>
          </Link>

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
                <Link key={index} href={link.path}>
                  <Box sx={classes.navLink}>{link.name}</Box>
                </Link>
              );
            })}
          </Stack>

          <Link href="/donate" style={{ textDecoration: "none" }}>
            <Button sx={classes.donateButton}>Donate Now</Button>
          </Link>
        </Stack>
      )}
    </Box>
  );
};
export default Header;
