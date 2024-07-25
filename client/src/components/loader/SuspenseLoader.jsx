import { Box } from "@mui/material";
import React from "react";
import { VIDEO_MEET_LOGO } from "../../assets";

function SuspenseLoader() {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component={"img"}
        sx={{ width: "100px" }}
        src={VIDEO_MEET_LOGO}
        alt={"Logo"}
      />
    </Box>
  );
}

export default SuspenseLoader;
