import React from "react";
import { TextField } from "@mui/material";
// import "../../pages/signin/signin.css"
import "../../pages/signup/signup.css";

const CustomInput = ({ errorState, handlerState, className, label, value }) => {
  return (
    <TextField
      // required
      error={errorState}
      value={value}
      className={className}
      id="outlined-required"
      label={label}
      size="small"
      sx={{
        input: {
          height: "26px",
          borderRadius: "10px",
          color: "#818181",
        },
        color: "#818181",
      }}
      onChange={handlerState}
    />
  );
};

export default CustomInput;
