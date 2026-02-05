import { useState } from "react";

export const useInput = (initialValue = "", validators = {}) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    required: validators.required,
    confirm: validators.confirm,
    ...(validators.confirm &&
      validators.matchField && { matchField: validators.matchField.value }),
    bind: {
      onChangeText: (e) => setValue(e),
      value,
    },
    clear: () => setValue(""),
    reset: () => setValue(initialValue),
  };
};
