import { useRef, useState } from "react";

// Custom hook for state same as class components
export function useObjectState(initialValue) {
  const [state, setData] = useState(initialValue);
  const storeState = useRef(initialValue);
  function setState(params) {
    const newState = {
      ...storeState.current,
      ...params,
    };
    storeState.current = newState;
    setData(newState);
  }
  return [state || initialValue, setState];
}
