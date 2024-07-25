import React from "react";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { FormHelperText } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: "0px",
    position: "relative",
    backgroundColor: theme.palette.primary.base,
    border: "none",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create(["background-color", "box-shadow"]),
    "&:focus": {
      // boxShadow: `${alpha(theme.palette.primary.main, 0.2)} 0 0 0 0.2rem`,
    },
  },
}));
function InputField2({
  required,
  label,
  bgColor,
  isCustomBorder = false,
  multiline = false,
  minRows = 1,
  maxRows = 2,
  type = "text",
  error,
  ...props
}) {
  return (
    <>
      {label && (
        <InputLabel
          className="input-label my-0 font-montserrat"
          sx={{
            color: "primary.main",
            fontSize: "14px",
            fontWeight: 500,
            marginBottom: "0.2rem"
          }}
        >
          {label}
          {required && <span className="required">*</span>}
        </InputLabel>
      )}
      <FormControl variant="standard" sx={{ width: "100%" }}>
        <BootstrapInput
          multiline={multiline}
          rows={props.rows}
          maxRows={maxRows}
          minRows={minRows}
          className={`${props.className}`}
          type={type}
          sx={{
            border: isCustomBorder ? "1px solid #D0D5DD" : "",
            borderRadius: isCustomBorder ? "8px" : "",
            // height: isCustomBorder ? "97px" : "",
          }}
          {...props}
        />
      </FormControl>
      {error && (
        <FormHelperText sx={{ color: "red", pl: "5px" }}>
          {error}
        </FormHelperText>
      )}
    </>
  );
}
export default InputField2;
