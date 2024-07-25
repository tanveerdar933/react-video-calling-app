import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import "../../fontStyles.css";

export default function DialogContainer({
  title,
  headerContent,
  headerContentALign = "center",
  note = "",
  openDialog,
  setOpenDialog,
  buttons,
  children,
  alignText = "left",
  dialogWidth = "500px",
  hideClose = false,
  persisted = false,
}) {
  const handleClose = () => {
    if (persisted) {
      return null;
    }
    setOpenDialog(false);
  };

  return (
    <Box>
      <Dialog
        fullWidth
        open={openDialog}
        className="Lato-font-class"
        onClose={handleClose}
        aria-labelledby="new-dialog-title"
        aria-describedby="new-dialog-description"
        PaperProps={{ sx: { borderRadius: "24px", maxWidth: dialogWidth, position: "relative" } }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", paddingBottom: 0 }}>
          {title && (
            <Typography
              fontWeight={500}
              sx={{
                width: "100%",
                textAlign: alignText,
                fontSize: { md: "24px", xs: "20px", color: "black" },
              }}
              mb={2}
            >
              {title}{note && <Typography component="span" sx={{ fontSize: "18px", ml: 0.2 }}>{note}</Typography>}
            </Typography>
          )}
          {headerContent && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: headerContentALign
              }}
            >
              {headerContent}
            </Box>
          )}
          {!hideClose && (
            <CloseRounded
              onClick={handleClose}
              sx={{ cursor: "pointer", color: "#344054", fontSize: "20px", position: "absolute", right: "24px" }}
            />
          )}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions sx={{ px: 3 }}>{buttons}</DialogActions>
      </Dialog>
    </Box>
  );
}
