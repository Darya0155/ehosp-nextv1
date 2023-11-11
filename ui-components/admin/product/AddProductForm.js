import {
  Button,
  FormControlLabel,
  MenuItem,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { userAgentFromString } from "next/server";
import { useForm } from "react-hook-form";
import { AlignContentRight } from "../../AlignContentRight";
import {
  addProductType,
  getAllProductTypeByAppId,
} from "../../../FrontEndServices/FEService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ImageFileUpload } from "../../ImageFileUpload";


export const AddProductForm = ({ actionAfterSubmit }) => {
  const { appDetails } = useSelector((state) => state.app);
  const [productType, setProductType] = useState([]);
  const [imageDataUrl,setImageDataUrl] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm();

  useEffect(() => {
    if (appDetails)
      getAllProductTypeByAppId(appDetails.ID.S).then((rs) => {
        setProductType(
          rs.Items.map((i) => {
            return { label: i.PRODUCT_TYPE.S, value: i.productTypeId.S };
          })
        );
      });
  }, []);

 

  const onSubmit = (data) => {
   
    data["image"]=imageDataUrl
    console.log(data)

    // reset.apply()
    // actionAfterSubmit()
  };
   

  return (
    <div className="max-w-md ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full  shadow-2xl p-5"
      >
        <Typography variant="h4">Add Product</Typography>

        <TextField
          select
          label="Product Type"
          fullWidth
          {...register("productTypeId", { required: { value: true } })}
          sx={{ mb: 2 }}
        >
          {productType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Product Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          {...register("productName", { required: { value: true } })}
        />

        <TextField
          label="Price"
          variant="outlined"
          type="number"
          fullWidth
          sx={{ mb: 2 }}
          {...register("price", { required: { value: true } })}
        />

        <TextField
          label="Avilable Qyt"
          variant="outlined"
          type="number"
          fullWidth
          sx={{ mb: 2 }}
          {...register("availableQnt", { required: { value: true } })}
        />

       
        <ImageFileUpload  imageDataUrl={imageDataUrl} setImageDataUrl={setImageDataUrl} />
        

        <FormControlLabel
          control={<Switch defaultChecked {...register("enabled")} />}
          label="isEnabled"
        />

        <Tooltip title={isValid ? "ADD" : "Please enter valid Data"}>
          <button
            className={`w-full ${
              isValid ? "bg-blue-600" : "bg-gray-400"
            } shadow-2xl  py-3 rounded-lg text-white text-lg `}
            disabled={!isValid}
          >
            {"Add"}
          </button>
        </Tooltip>
      </form>
    </div>
  );
};
