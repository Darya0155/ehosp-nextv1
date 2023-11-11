import { configureStore, createSlice } from '@reduxjs/toolkit'


// <Alert severity="error">This is an error message!</Alert>
// <Alert severity="warning">This is a warning message!</Alert>
// <Alert severity="info">This is an information message!</Alert>
{/* <Alert severity="success">This is a success message!</Alert> */}

const appStore=createSlice({
    name:"appStore",
    
    initialState:{
        appDetails:null,
        backdropFlag:false,
        rightDrawer: {state:false,component:<h1>Working fine</h1>},
        successSnackbar: {state:false,message:"Working fine"},
        warningSnackbar: {state:false,message:"Working fine"},
        errorSnackbar: {state:false,message:"Working fine"},
        infoSnackbar: {state:false,message:"Working fine"}
    },
    reducers:{
        setAppDetails:(state,{payload})=>{
            state.appDetails=payload
        },
        showBackDrop:(state)=>{
            state.backdropFlag=true;
        },
        hideBackDrop:(state)=>{
            state.backdropFlag=false; 
        },
        openRightDrawer:(state,{payload})=>{
            state.rightDrawer.state=true
            state.rightDrawer.component=payload;
        },
        closeRightDrawer:(state )=>{
            state.rightDrawer.state=false
            state.rightDrawer.component=<h1>Working fine</h1>;
        },
        showSnakbar:(state,{payload:{T,M}})=>{
            console.log(T,M)
            if(T==="S"){
                state.successSnackbar.state=true
                state.successSnackbar.message=M
            }
            if(T==="I"){
                state.infoSnackbar.state=true
                state.infoSnackbar.message=M
            }
            if(T==="W"){
                state.warningSnackbar.state=true
                state.warningSnackbar.message=M
            }
            if(T==="E"){
                state.errorSnackbar.state=true
                state.errorSnackbar.message=M
            }
        },
        hideSnakbar:(state,{payload:{T}})=>{
            if(T==="S"){
                state.successSnackbar.state=false
            }
            if(T==="I"){
                state.infoSnackbar.state=false
            }
            if(T==="W"){
                state.warningSnackbar.state=false
            
            }
            if(T==="E"){
                state.errorSnackbar.state=false
            
            }
        }

    }
})





export const {setAppDetails,showBackDrop,
    hideBackDrop,openRightDrawer,closeRightDrawer,showSnakbar,hideSnakbar}=appStore.actions;
export default configureStore({
  reducer: {"app":appStore.reducer},
})