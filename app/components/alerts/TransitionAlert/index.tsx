"use client"

import {
  Alert,
  AlertColor,
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";

export type TransitionAlertProps = {
  message: string;
  severity?: AlertColor;
  duration?: number;
  open?: boolean;
  onClose?: () => void;
};

export default function TransitionAlert({
  message,
  severity = "error",
  duration = 6000,
  open = true,
  onClose,
}: TransitionAlertProps) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    setInternalOpen(open);
    if (open) {
      const timer = setTimeout(() => {
        setInternalOpen(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [open, duration, onClose]);

  const handleClose = () => {
    setInternalOpen(false);
    onClose?.();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "5%",
        left: "5%",
        width: "90%",
        maxWidth: "350px",
        zIndex: 20,
      }}
    >
      <Collapse in={internalOpen}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <strong>{message}</strong>
        </Alert>
      </Collapse>
    </Box>
  );
}
