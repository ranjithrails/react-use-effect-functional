import React, { useEffect, useState, useRef } from "react";

function UseRefEx() {
  // Store a reference to the input's DOM node
  const inputRef = useRef();

	// Store the input's value in state
  const [value, setValue] = useState("");

  useEffect(
    () => {
      // This runs AFTER the first render,
      // so the ref is set by now.
      console.log("render ref");
      // inputRef.current.focus();
    },
		// The effect "depends on" inputRef
    [inputRef]
  );

  return (
    <>
    {console.log("inside return")}
    <input
      ref={inputRef}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    </>
  );
}

export default UseRefEx;