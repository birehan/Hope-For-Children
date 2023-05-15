import { Box, IconButton, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerComponent from "./Drawer";
const useStyles = () => {
  return {
    header: {
      position: "absolute",
      top: 0,
      // background: "transparent",
      height: "80px",
      width: "100vw",
      zIndex: "10",
      background: "rgba(70, 69, 81, 0.62)", // or any other color you want for the background
      backdropFilter: "blur(10px)",
    },
  };
};

const links = [
  {
    name: "Courses",
    path: "/courses",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
  {
    name: "Contact-Us",
    path: "/contact",
  },
];

const Header = () => {
  const classes = useStyles();

  //   return (
  //     <Box sx={classes.header}>
  //       <Box sx={{ color: "white" }}>Header</Box>
  //     </Box>
  //   );
  // };

  // export default Header;

  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={classes.header}>
      {openDrawer && (
        <DrawerComponent
          openDrawer={openDrawer}
          setOpenDrawer={setOpenDrawer}
        />
      )}

      <Box
        onClick={() => {
          // navigate("/");
        }}
        component="img"
        alt="logo"
        src="/"
        // sx={useStyles.Mlogo}
      ></Box>

      {isMatch ? (
        <IconButton
          sx={{ color: "black", mr: "20px" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        <Stack
        // sx={useStyles.container}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            {" "}
            <Stack
            // sx={useStyles.linksContainer}
            >
              {links.map((link, index) => {
                return (
                  <Box
                    key={index}
                    onClick={() => {
                      // navigate(link.path);
                    }}
                    title={link.name}
                    sx={
                      {
                        // ...useStyles.headerLinks,
                        // ...(pathname === link.path && useStyles.selectedLink),
                      }
                    }
                  >
                    {link.name}
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      )}
    </Box>
  );
};

export default Header;
