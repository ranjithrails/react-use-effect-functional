import React, {useState, useEffect} from "react";

function PropChangeWatch({ a, b }) {
  useEffect(() => {
    console.log("value of 'a' changed to", a);
  }, [a]);

  return (
    <div>
      I've got 2 props: a={a} and b={b}
    </div>
  );
}

function Demo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <PropChangeWatch a={count1} b={count2} />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </div>
  );
}

export default Demo;
