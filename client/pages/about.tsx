import {
  Box,
  MenuItem,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Header from "../src/components/header/Header";
import AboutDropDown from "../src/components/about_components/AboutDropDown";
import aboutData from "../src/components/about_components/options_data";
import AboutDetail from "../src/components/about_components/AboutDetail";
import Image from "next/image";

export default function About() {
  const { title, icon, items } = aboutData[0];
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Stack>
      <Header />
      <Stack
        sx={{
          position: "relative",
          height: { xs: "300px", md: "400px" },
          background: "url(/assets/images/landing1.png)",
          backgroundPosition: "center",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#00B1F4",
            fontWeight: "bold",
          }}
        ></Typography>
        <Typography
          variant="h2"
          sx={{
            color: "#00B1F4",
            fontWeight: "bold",
          }}
        >
          Who We Are
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          margin: { xs: "40px auto", md: "50px auto" },
          width: { xs: "95vw", md: "90vw", lg: "85vw" },
          // border: "5px solid green",
          gap: "30px",
        }}
      >
        {isLargeScreen ? (
          <Stack
            sx={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              padding: { xs: "15px", md: "20px" },
              borderRadius: "5px",
              boxShadow: "2px 3px 32px -12px rgba(0, 155, 154, 0.77)",
            }}
          >
            <Typography
              sx={{
                background: "#00B1F4",
                color: "white",
                padding: "5px 15px",
                borderRadius: "5px",
                "&:hover": {
                  cursor: "pointer",
                  opacity: "0.85",
                },
              }}
            >
              About-Us
            </Typography>

            <Box
              sx={{
                background: "#00B1F4",
                color: "white",
                padding: "5px 15px",
                borderRadius: "5px",
                "&:hover": {
                  cursor: "pointer",
                  opacity: "0.85",
                },
              }}
            >
              <AboutDropDown title={title} icon={icon} items={items} />
            </Box>
          </Stack>
        ) : (
          <Stack sx={{ gap: "30px" }}>
            {aboutData.map((section, index) => {
              return (
                <Stack
                  sx={{
                    boxShadow: "2px 3px 32px -12px rgba(0, 155, 154, 0.77)",
                    // width: "300px",
                    padding: "20px 40px 20px 10px",
                  }}
                >
                  <MenuItem
                    sx={{
                      gap: "10px",
                      fontSize: "1.3rem",
                      "&:hover": { background: "transparent !important" },
                    }}
                  >
                    <Image
                      src={section.icon}
                      alt="Icon"
                      width="30"
                      height="30"
                    />{" "}
                    <span>{section.title}</span>
                  </MenuItem>

                  {section.items.map((item) => (
                    <Stack
                      key={item.title}
                      sx={{
                        "&:hover": { color: "#00B1F4 !important" },
                      }}
                    >
                      <MenuItem sx={{ gap: "10px" }}>
                        <img src={item.icon} alt="Item Icon" />
                        <span>{item.title}</span>
                      </MenuItem>
                    </Stack>
                  ))}
                </Stack>
              );
            })}
          </Stack>
        )}
        <Stack>
          <AboutDetail />
        </Stack>
      </Stack>
    </Stack>
  );
}
