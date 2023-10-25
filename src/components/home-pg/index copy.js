import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import CardList from "./card-list";

const HomePage = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
      .then((response) => response.json())
      .then((json) => setState(json));
  }, []);

  const dateGetfun = (dateParam) => {
    return (
      <>
        <h1>Hi, Hello . Today date is {dateParam}</h1>
      </>
    );
  };
  return (
    <>
      <Header />
      <main>
        <CardList data={state} callFunction={dateGetfun} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
