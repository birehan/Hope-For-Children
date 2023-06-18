import React from "react";
import { FormHelperText } from "@mui/material";
interface Prop {
  text: string;
}
const HelperText = ({ text }: Prop) => {
  return (
    <FormHelperText
      sx={{
        mb: "-10px",
        fontSize: "16px",
        color: "black",
        opacity: "1",
        fontWeight: "light",
        marginTop: "10px",
      }}
    >
      {text}
    </FormHelperText>
  );
};

export default HelperText;
