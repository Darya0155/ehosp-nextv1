import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useSelector } from "react-redux";
import { useCommonParent } from "./CommonParent";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const {snakbar}=useCommonParent()
  const { successSnackbar, warningSnackbar, errorSnackbar, infoSnackbar } =
    useSelector((state) => state.app);



  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={successSnackbar.state}
        autoHideDuration={6000}
        onClose={() => snakbar(false, "S", "working fine !!")}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={() => snakbar(false, "S", "working fine !!")}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successSnackbar.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={errorSnackbar.state}
        autoHideDuration={6000}
        onClose={() => snakbar(false, "E", "working fine !!")}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert
          onClose={() => snakbar(false, "E", "working fine !!")}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorSnackbar.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={warningSnackbar.state}
        autoHideDuration={6000}
        onClose={() => snakbar(false, "W", "working fine !!")}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={() => snakbar(false, "W", "working fine !!")}
          severity="warning"
          sx={{ width: "100%" }}
        >
          {warningSnackbar.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={infoSnackbar.state}
        autoHideDuration={6000}
        onClose={() => snakbar(false, "I", "working fine !!")}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={() => snakbar(false, "I", "working fine !!")}
          severity="info"
          sx={{ width: "100%" }}
        >
          {infoSnackbar.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
