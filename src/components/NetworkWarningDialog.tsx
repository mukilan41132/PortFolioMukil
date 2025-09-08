import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
type NetworkWarningDialogProps = {
  open: boolean;
  onClose: () => void;
  onRetry: () => void;
};
const NetworkWarningDialog: React.FC<NetworkWarningDialogProps> = ({
  open,
  onClose,
  onRetry,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Network Error</DialogTitle>
      <DialogContent>
        <p>
          You are offline. Please check your internet connection and try again.
        </p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onRetry} color="primary">
          Retry
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NetworkWarningDialog;
