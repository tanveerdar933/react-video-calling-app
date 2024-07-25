import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormHelperText, alpha } from "@mui/material";
const InputContainer = styled("div")(({ border }) => ({
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  border: `2px solid ${border}`,
  display: "flex",
  alignItems: "center",
}));

const BootstrapInput = styled(InputBase)(({ adornment }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: adornment ? "10px 2px" : "10px 12px",
    backgroundColor: "white",
    borderRadius: "8px",
    width: "100%",
  },
}));

const StartAdornment = styled("div")({
  paddingLeft: "8px",
});

const EndAdornment = styled("div")({
  paddingRight: "8px",
});

function InputField({
  required,
  label,
  error,
  startAdornment,
  endAdornment,
  border = "#d0d5dd",
  ...props
}) {
  return (
    <FormControl variant="standard" sx={{ width: "100%" }}>
      {label && (
        <InputLabel
          className="input-label my-0 font-montserrat"
          sx={{
            color: "primary.main",
            fontSize: "15px",
            fontWeight: 600,
            marginBottom: "0.2rem",
          }}
        >
          {label}
          {required && <span className="required">*</span>}
        </InputLabel>
      )}
      <InputContainer border={border}>
        {startAdornment && <StartAdornment>{startAdornment}</StartAdornment>}
        <BootstrapInput adornment={startAdornment} {...props} />
        {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      </InputContainer>
      {error && (
        <FormHelperText sx={{ color: "red", pl: "5px" }}>
          {error}
        </FormHelperText>
      )}
    </FormControl>
  );
}

export default InputField;
