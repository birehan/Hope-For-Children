import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItem, Stack, Typography, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useStyles from "./styles";
import Link from "next/link";

interface Props {
  IsSmallScreen: boolean;
}

const AchievementDropDown = ({ IsSmallScreen }: Props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ overflow: "auto" }}>
      {IsSmallScreen ? (
        <Stack onClick={handleClick} sx={classes.stackSmallScreen}>
          <ListItem sx={classes.listItemSmallScreen}>
            <Typography sx={{ fontSize: "1.2rem", fontWeight: "400" }}>
              Achievements
            </Typography>
          </ListItem>

          <KeyboardArrowDownIcon />
        </Stack>
      ) : (
        <Stack onClick={handleClick} sx={classes.stackLargeScreen}>
          Achievements
          <KeyboardArrowDownIcon />
        </Stack>
      )}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{}}
      >
        <Stack sx={classes.stackMenu}>
          <MenuItem sx={classes.menuItem} onClick={handleClose}>
            <Link href="/accomplishment">Our Work</Link>
          </MenuItem>
          <Divider />
          <MenuItem sx={classes.menuItem} onClick={handleClose}>
            <Link href="/alumni">Alumni</Link>
          </MenuItem>
        </Stack>
      </Menu>
      {IsSmallScreen && <Divider sx={classes.divider} />}
    </Box>
  );
};

export default AchievementDropDown;
