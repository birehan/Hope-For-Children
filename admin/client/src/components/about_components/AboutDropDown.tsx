import { useState } from "react";
import { Box, Stack, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image from "next/image";

interface Item {
  icon: string;
  title: string;
}

interface AboutDropDownProps {
  icon: string;
  title: string;
  items: Item[];
}

const AboutDropDown: React.FC<AboutDropDownProps> = ({
  icon,
  title,
  items,
}) => {
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
      <Stack onClick={handleClick} sx={{ flexDirection: "row", gap: "10px" }}>
        <Image src={icon} alt="Icon" width="20" height="20" />
        <span>{title}</span>
        <KeyboardArrowDownIcon />
      </Stack>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ marginTop: "10px" }}
      >
        {items.map((item) => (
          <Stack key={item.title}>
            <MenuItem sx={{ gap: "10px" }} onClick={handleClose}>
              <img src={item.icon} alt="Item Icon" />
              <span>{item.title}</span>
            </MenuItem>
            <Divider />
          </Stack>
        ))}
      </Menu>
    </Box>
  );
};

export default AboutDropDown;
