import { useState } from "react";

/**
 * Description: A simple hook for magically managing state of a form.
 * Usage: Attach the returned "handleFormChange" handler to your <form> element, and add an "id" attribute to any form element. 
 * This id will be used as the key in the form state, if you do not wish for a given element to be saved to form state the id should be 'no-save'.
 */

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

