import { FormControlLabel, Switch, TextField, Tooltip, Typography } from "@mui/material";
import { userAgentFromString } from "next/server";
import { useForm } from "react-hook-form";
import { AlignContentRight } from "../../AlignContentRight";
import { addProductType } from "../../../FrontEndServices/FEService";


export const AddProductTypeForm = ({actionAfterSubmit}) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors ,isValid},
  } = useForm();

  
  
  const onSubmit = (data) => {
    addProductType(data)
    reset.apply()
    actionAfterSubmit()
  };
  return (
    <div className="max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full space-y-3 shadow-2xl p-5"
      >
        <Typography variant="h4">Add Product Type</Typography>
        <TextField
          id="outlined-basic"
          label="Product Type"
          variant="outlined"
          fullWidth
          {...register("productType", { required: { value: true } })}
        />
        
        <FormControlLabel control={<Switch defaultChecked {...register("enabled")}/>} label="isEnabled" />
        
        <Tooltip title={isValid?"ADD":"Please enter valid Data"}>
            <button className={`w-full ${isValid?"bg-blue-600":"bg-gray-400"} shadow-2xl  py-3 rounded-lg text-white text-lg `} disabled={!isValid}>
            {"Add"}
            </button>
        </Tooltip>
      </form>
    </div>
  );
};
