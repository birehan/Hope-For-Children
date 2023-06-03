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
  const styles = useStyles();

  return (
    <>
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem sx={{ flexDirection: "column" }}>
            <Link sx={styles.drawerSite}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
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
                    <Stack sx={styles.logoContainer}>
                      <Box
                        component="img"
                        alt="logo"
                        src="/assets/images/logo.jpg"
                        sx={styles.logoImage}
                      />
                      <Typography sx={styles.drawerTitle}>
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
                    href={link.path}
                    onClick={() => {
                      setOpenDrawer(false);
                    }}
                    sx={styles.listItem}
                  >
                    <Typography sx={styles.listItemText}>
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
