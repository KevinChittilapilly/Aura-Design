import { Snackbar, Alert } from "@mui/material";
import React from "react";

const Toast = (props) => {
  const {open, isSavedSucess}  = props;
  

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(props)
    props?.setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      onClose={handleClose}
    >
      {isSavedSucess ? (
        <Alert severity="success" sx={{ width: "100%" }}>
          Saved Successfully
        </Alert>
      ) : (
        <Alert severity="error">This is an error message!</Alert>
      )}
    </Snackbar>
  );
};

export default Toast;
