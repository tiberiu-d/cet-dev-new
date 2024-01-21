"use client";

// hooks
import { useForm } from "react-hook-form";
import { useUpdateColor } from "@/services/masterdata/colors/mutations";
import { useColorsByID } from "@/services/masterdata/colors/queries";

///
import ColorModal from "./colors/color-modal";


type UpdateColorProps = {
  ID: number;
};

const UpdateColor = ({ ID }: UpdateColorProps) => {
  console.log("UpdateColor: " + ID);

  const ColorsByIDQuery = useColorsByID(ID);
  const updateQuery = useUpdateColor();

  const defaultValues = ColorsByIDQuery.data

  if (defaultValues)
  return (
    <ColorModal ID={defaultValues.ID} LABEL={defaultValues.LABEL} VALUE={defaultValues.VALUE} EXPLANATION={defaultValues.EXPLANATION}/>
  );
};
export default UpdateColor;
