import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';

const PincodePopup = ({ open, onClose, pincodeData }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Pincode Details</DialogTitle>
      <DialogContent>
        {pincodeData && Object.entries(pincodeData).map(([key, value]) => (
          <Typography key={key}>{key}: {value}</Typography>
        ))}
      </DialogContent>
    </Dialog>
  );
};

export default PincodePopup;
