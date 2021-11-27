import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Top from './useEffectOne';
import ThreeCounts from "./useEffectTwo";
import Demo from "./useEffectThree";
import UseRefEx from "./useEffectFour";
import Reddit from "./useEffectFive";

function LifecycleDemo() {
  // It takes a function
  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log("render!");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () =>  {
      alert("alert-unmounting");
      console.log("alert-unmounting...")
    };
  });

  return "I'm a lifecycle demo";
}

function App() {
  // Set up a piece of state, just so that we have
  // a way to trigger a re-render.
  const [random, setRandom] = useState(Math.random());

  // Set up another piece of state to keep track of
  // whether the LifecycleDemo is shown or hidden
  const [mounted, setMounted] = useState(true);

  // This function will change the random number,
  // and trigger a re-render (in the console,
  // you'll see a "render!" from LifecycleDemo)
  const reRender = () => setRandom(Math.random());

  // This function will unmount and re-mount the
  // LifecycleDemo, so you can see its cleanup function
  // being called.
  const toggle = () => setMounted(!mounted);

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log("inside app - render!");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () =>  {
      console.log("inside app - unmounting...")
    };
  });

  // 2 pieces of state: one to hold the input value,
  // another to hold the current subreddit.
  const [inputValue, setValue] = useState("reactjs");
  const [subreddit, setSubreddit] = useState(inputValue);

  // Update the subreddit when the user presses enter
  const handleSubmit = e => {
    e.preventDefault();
    setSubreddit(inputValue);
  };


  return (
    <>
      {/* {console.log('inside app render')}
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      <div>{mounted && <LifecycleDemo />}</div> */}
      {/* <Top /> */}
      {/* <ThreeCounts /> */}
      {/* <Demo /> */}
      {/* <UseRefEx /> */}
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      <Reddit subreddit={subreddit} />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
