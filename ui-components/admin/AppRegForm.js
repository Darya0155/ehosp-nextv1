import { TextField, Typography } from "@mui/material";
import { userAgentFromString } from "next/server";
import { useForm } from "react-hook-form";
import { appReg } from "../../FrontEndServices/FEService";

export const AppRegForm = ({setIsAppLinkedToUserFlag}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isValid},
  } = useForm();

  
  
  const onSubmit = (data) => {
    appReg(data).then(res=>{
        setIsAppLinkedToUserFlag(res)
    })
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-3 shadow-2xl p-5"
      >
        <Typography variant="h4">Shop Register</Typography>
        <TextField
          id="outlined-basic"
          label="Shop Name"
          variant="outlined"
          fullWidth
          {...register("shop_name", { required: { value: true } })}
        />

        <TextField
          id="outlined-basic"
          label="Phone 1"
          variant="outlined"
          fullWidth
          {...register("phone1", { required: { value: true } })}
        />

        <TextField
          id="outlined-basic"
          label="Phone 2"
          variant="outlined"
          fullWidth
          {...register("phone2", { required: { value: true } })}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          {...register("address", { required: { value: true } })}
        />

        <button className={`w-full ${isValid?"bg-blue-600":"bg-gray-400"} shadow-2xl  py-3 rounded-lg text-white text-lg `} disabled={!isValid}>
          {isValid?"Save":"Please Enter Valid Data"}
        </button>
      </form>
    </div>
  );
};
