import React from "react";
import { AlertTriangle } from "lucide-react";

const FormError = ({ message }) => {
    if(!message)
        {
            return null;
        }
  return (
    <div className="bg-destructive/15 bg-red-200 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <AlertTriangle className="h-4 w-4 " />
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default FormError;
