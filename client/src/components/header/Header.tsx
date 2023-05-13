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
import Link from "next/link";
import Image from "next/image";
import links from "./HeaderLinks";
import AchievementDropDown from "./AchievementDropDown";
import useStyles from "./styles";

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
            ...classes.stackContainer,
            justifyContent: "space-between",
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
        <Stack sx={classes.stackContainer}>
          <Stack sx={classes.logoContainer}>
            <Image
              src="/assets/images/logo2.png"
              alt="log"
              height="50"
              width="50"
            />
            <Typography sx={classes.logoTitle}>Hope For Children</Typography>
          </Stack>
          <Stack sx={classes.navLinksContainer}>
            {links.map((link, index) => {
              if (link.name === "Achievements") {
                return (
                  <AchievementDropDown IsSmallScreen={false} key={index} />
                );
              }
              return (
                <Link
                  key={index}
                  style={{ textDecoration: "none" }}
                  href={link.path}
                >
                  <Box key={index} sx={classes.navLink}>
                    {link.name}
                  </Box>
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
