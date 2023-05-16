import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Typography, TextField, InputAdornment } from '@mui/material';

const ModalComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Previsão
        <CalendarMonthIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-title" variant="h6" component="h2">
            Data da Previsão
          </Typography>
          <Button onClick={handleClose} sx={{ mt: -8, ml: 38, color: 'black' }}>
            X
          </Button>
          <TextField
            fullWidth
            type="datetime-local"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">

                </InputAdornment>
              )
            }}
            placeholder="Data/Hora"
            variant="outlined"
          />

          <Button variant='contained' onClick={handleClose} sx={{ mt: 5, ml: 15 }}>
            Verificar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComponent;
