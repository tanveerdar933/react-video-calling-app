import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, alpha } from "@mui/material";


const InputContainer = styled("div")(({ err }) => ({
  borderRadius: "12px",
  backgroundColor: err ? "#d9255016" : "#f5f5f8",
  display: "flex",
  alignItems: "center",
  ":has(.Mui-focused)": {
    outline: `4px solid ${err ? "#d9255030" : "#d4d6f5"}`,
    borderRadius: "12px",
  }
}));

const BootstrapInput = styled(InputBase)(({ adornment }) => ({
  width: "100%",
  fontFamily: "Lato",
  "& .MuiInputBase-input": {
    padding: adornment ? "14px 2px" : "14px",
    borderRadius: "8px",
    width: "100%",
    fontSize: "14px",
    color: "#8f8fa7"
  },


}));

const StartAdornment = styled("div")({
  paddingLeft: "8px",
});

const EndAdornment = styled("div")({
  paddingRight: "8px",
});

function InputField3({
  error,
  startAdornment,
  endAdornment,
  ...props
}) {
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      <InputContainer err={error}>
        {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
        <BootstrapInput adornment={startAdornment} {...props} />
        {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      </InputContainer>
      {error && (
        <FormHelperText
          sx={{
            color: "#d92550",
            pl: "5px",
            fontSize: "11px"
          }}
        >
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default InputField3;
