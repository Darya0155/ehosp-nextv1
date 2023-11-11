import { useEffect, useState } from "react";
import AdminBar from "../../../ui-components/admin/AdminBar";
import PlusCircleIcon from "@heroicons/react/24/outline/PlusCircleIcon";
import { AlignContentRight } from "../../../ui-components/AlignContentRight";
import { IconButton } from "@mui/material";
import { AddProductTypeForm } from "../../../ui-components/admin/productType/AddProductTypeForm";
import {
  enableDisableProductType,
  getAllProductTypeByAppId,
} from "../../../FrontEndServices/FEService";
import { useAppDetailsWithoutAppId } from "../../../FrontEndServices/CommonHooks";
import { useDispatch, useSelector } from "react-redux";
import DataTables from "../../../ui-components/DataTable";
import { SelectButton } from "primereact/selectbutton";
import {
  CommonParent,
  useCommonParent,
} from "../../../ui-components/CommonParent";
import CustomizedSnackbars from "../../../ui-components/CustomizedSnackbars";


// {field:"name",header:"Name"},

export default function Home() {
  const { reload: reloadAppDetails } = useAppDetailsWithoutAppId();
  const { appDetails } = useSelector((state) => state.app);
  const [productTypeData, SetProductTypeData] = useState([]);
  const { backdrop, rightDrawer,snakbar } = useCommonParent();

  const dataTableHeaders = [
    {
      field: "PRODUCT_TYPE.S",
      header: "PRODUCT_TYPE",
    },
    {
      field: "isEnabled.BOOL",
      header: "isEnabled",
    },
  ];

  useEffect(() => {
    if (appDetails) loadProductTypes();
  }, [appDetails]);

  const loadProductTypes = async () => {
    const rs = await getAllProductTypeByAppId(appDetails.ID.S);
    SetProductTypeData(
      rs.Items.map((i) => ({
        ...i,
        "isEnabled.BOOL": (
          <SelectButton
            value={i.isEnabled.BOOL ? "Enabled" : "Disabled"}
            onChange={(e) =>
              updateProductTypeStatus(i.productTypeId.S, e.value)
            }
            options={["Enabled", "Disabled"]}
          />
        ),
      }))
    );
  };

  const updateProductTypeStatus = async (productId, e) => {
    if (e === null) {
      return;
    }
    backdrop(true)
    var response = await enableDisableProductType(
      productId,
      e === "Enabled" ? true : false
    );
    console.log(response);
    loadProductTypes();
    backdrop(false)
  };

  return (
    <CommonParent isSecure={true}>
      <AdminBar>
        <AlignContentRight>
          <IconButton
            onClick={() =>
              rightDrawer(
                true,
                <AddProductTypeForm
                  actionAfterSubmit={() => {
                    rightDrawer(false,null),
                     loadProductTypes();
                     snakbar(true,"S","Added will be available for use in while !")
                  }}
                />
              )
            }
          >
            <PlusCircleIcon className="w-9 h-9 text-green-600 font-bold hover:bg-green-500 hover:text-white hover:rounded-full" />
          </IconButton>
        </AlignContentRight>
        
        <DataTables
          dataRowsHeader={dataTableHeaders}
          dataRows={productTypeData}
        />
      </AdminBar>
    </CommonParent>
  );
}
