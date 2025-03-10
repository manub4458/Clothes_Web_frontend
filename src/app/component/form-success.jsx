import React from "react";
import { CheckCircle2 } from "lucide-react";

const FormSuccess = ({ message }) => {
    if(!message)
        {
            return null;
        }
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircle2 className="h-4 w-4" />
      <p className="font-medium">{message}</p>
    </div>
  );
};

export default FormSuccess;
