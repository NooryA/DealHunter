import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import HoverRating from './Rating';
export default function Review() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{"margin-bottom":"20px"}}>
        Submit a Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit a Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
          Please be respectful when submitting reviews 
          </DialogContentText>
          <HoverRating/>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write your Review"
            type="review"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}