import React from "react";
import { TextField as MuiTextField } from "@mui/material";

interface Props {
  label?: string;
  variant?: "filled" | "outlined" | "standard";
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isFullWidth?: boolean;
}

const TextField: React.FC<Props> = ({
  value,
  onChange,
  label,
  variant = "outlined",
  isFullWidth,
}) => {
  return (
    <MuiTextField
      label={label}
      variant={variant}
      value={value}
      onChange={onChange}
      fullWidth={isFullWidth}
    />
  );
};

export default TextField;
