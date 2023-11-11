import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon"
import { AlignContentRight } from './AlignContentRight';
import { IconButton } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeRightDrawer } from '../FrontEndServices/Store/store';


export default function RightSideDrawer() {
  
  const {state,component} =useSelector(state=>state.app.rightDrawer)
  const dispatch=useDispatch()
  

  return (
    <div>
      
        <React.Fragment >
          <Drawer
            anchor={'right'}
            open={state}
            onClose={()=>dispatch(closeRightDrawer())}
          >
            <AlignContentRight>
                <IconButton onClick={()=>dispatch(closeRightDrawer())}>
                   <XMarkIcon className='w-9 h-9 '/>
                </IconButton>
            </AlignContentRight>
            {component}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}