import { useState } from "react";

export const useForm = () => {
  const [formValues, setFormValues] = useState();
  const handleFormChange = (e) => {
    let {
      target: { type, id, value, checked },
    } = e;
    if (id === "no-save") return;
    if (type === "checkbox") value = checked;
    setFormValues({ ...formValues, [id]: value });
  };
  return [formValues, handleFormChange];
};
