import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  return (
    <>
      <Header />
      <h1>Functional component</h1>
      <h3>Hi, I Clicked {count} times.</h3>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>

      <Footer />
    </>
  );
};

export default FunctionalComponent;
