import * as React from "react";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import { Box, FormHelperText, InputLabel } from "@mui/material";
import { KeyboardArrowDown, MoreVertOutlined } from "@mui/icons-material";

export default function WhiteSelectField({
  options,
  defaultValue = "sort",
  error,
  height = "43px",
  placeholder,
  withoutBorder = false,
  ...props
}) {
  return (
    <FormControl sx={{ width: "100%", position: "relative" }}>
      <MuiSelect
        defaultValue={defaultValue}
        className="grey-select-field"
        sx={{
          backgroundColor: error ? "#d9255016" : "#f5f5f8",
          borderRadius: "12px",
          outline: "none",
          display: "flex",
          alignItems: "center",
          color: "#8f8fa7",
          ".MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            outline: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "4px solid #d4d6f5 !important",
            outline: "none"
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "transparent",
            outline: "none",
          },
          ".MuiSvgIcon-root ": {
            color: "#8f8fa7",
            position: "absolute",
            right: "6px",
            pointerEvents: "none",
          },
          ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
            padding: "14px !important"
          }
        }}
        IconComponent={() => <KeyboardArrowDown sx={{ color: "#8f8fa7 !important" }} />}
        {...props}
      >
        {placeholder && (
          <MenuItem value="sort" disabled>
            <span>{placeholder}</span>
          </MenuItem>
        )}
        {options?.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            <Typography
              sx={{ color: "#8f8fa7", fontFamily: "Lato", fontSize: "14px", fontWeight: "normal" }}
            >
              {option.label}
            </Typography>
          </MenuItem>
        ))}
      </MuiSelect>
      {error && (
        <FormHelperText sx={{
          color: "#d92550",
          fontFamily: "Lato",
          fontSize: "11px",
          ml: "5px"
        }}>{error}</FormHelperText>
      )}
    </FormControl>
  );
}
