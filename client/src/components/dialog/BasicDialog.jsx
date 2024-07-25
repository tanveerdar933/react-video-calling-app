import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Typography } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";
import "../../fontStyles.css";

export default function BasicDialog({
  title,
  note = "",
  openDialog,
  setOpenDialog,
  buttons,
  children,
  alignText = "left",
  dialogWidth = "sm",
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
        maxWidth={dialogWidth}
        open={openDialog}
        className="Lato-font-class"
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { borderRadius: "16px" } }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
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
          {!hideClose && (
            <CloseRounded
              onClick={handleClose}
              sx={{ cursor: "pointer", color: "#344054", fontSize: "28px" }}
            />
          )}
        </DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions sx={{ px: 3 }}>{buttons}</DialogActions>
      </Dialog>
    </Box>
  );
}
