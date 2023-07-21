import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from "@mui/material/TextField";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>New cheatsheet</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
          <form action="cheatsheet/create" method="POST" className="cs-form">
            <h1>New cheatsheet</h1>
            <input type="hidden" name="user" value={localStorage?.userId} />
            <TextField
              id="cheatsheet-title"
              name="name"
              label="Title"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="cheatsheet-description"
              name="description"
              label="Description"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}