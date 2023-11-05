import React, { useState } from "react";

// Correct way: Using a custom Hook
const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  // Additional logic or functionality for your custom hook

  return [value, updateValue];
};

export default useCustomHook;
