import { useState } from "react";

/**
 * This is a custom useState hook that can be used to form input elements.
 * It takes an initialValue and creates a state hook.
 * It returns the input attributes that are going to be passed to the input element
 * containing the 'value' attribute and the 'onChange' attribute.
 * It also returns a function that resets the input field value to the default value.
 */

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [{ value, onChange: (event) => setValue(event.target.value) }, () => setValue(initialValue)];
};
