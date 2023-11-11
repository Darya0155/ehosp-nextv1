import { useDispatch } from "react-redux";
import SimpleBackdrop from "./SimpleBackDrop"
import { closeRightDrawer, hideBackDrop, hideSnakbar, openRightDrawer, showBackDrop, showSnakbar } from "../FrontEndServices/Store/store";
import SecurePage from "./SecurePage";
import RightSideDrawer from "./rightSideDrawer";
import CustomizedSnackbars from "./CustomizedSnackbars";




export const useCommonParent=()=>{

    const dispatch=useDispatch();


    const backdrop=(flag)=>{
        if(flag)
            dispatch(showBackDrop())
        else
            dispatch(hideBackDrop())
    }   

    const rightDrawer=(flag,componet)=>{
        if(flag)
            dispatch(openRightDrawer(componet))
        else
            dispatch(closeRightDrawer())
    }

    const snakbar=(status,T,M)=>{
        if(status)
            dispatch(showSnakbar({T,M}))
        else
            dispatch(hideSnakbar({T,M}))
    }   


    return {
        backdrop,rightDrawer,snakbar
    }

}

export const CommonParent=({isSecure,children})=>{


    if(isSecure){
        return <SecurePage>
                    
                    <SimpleBackdrop  />
                    <RightSideDrawer />
                    <CustomizedSnackbars/>
                    {children}
            
            </SecurePage>
    }
    return (
        <> 
            <SimpleBackdrop  />
            <RightSideDrawer />
            <CustomizedSnackbars/>
            
            {children}
        
        </>
    )
}