import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { hideBackDrop } from '../FrontEndServices/Store/store';

export default function SimpleBackdrop() {


  const {backdropFlag}=useSelector(state=>state.app)
  const dispatch=useDispatch();
  
  const handleClose = () => {
    
    dispatch(hideBackDrop())
  };
  return (
    <div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdropFlag}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}