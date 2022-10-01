import React from 'react'
import { useObjectState } from './CommonHook'
export default function Dynamic() {
  const [state, setState] = useObjectState({
    events: [],
    loader: false,
    modal: false,
    color: "",
    shiftName: "",
    startTime: "",
    endTime: "",
    sm: "AM",
    em: "AM",
  });
  return (
   <>
    <div>Dynamic Hook</div>
    <div>{state.color}</div>
    <button onClick={()=>setState({color:"sami"})}>Change Color</button>

   </>
  )
}
