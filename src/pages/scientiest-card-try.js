import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import ScientiestList from "../components/scientiest-card";
import PackingList from "../components/conditional-comp/conditional-list";
import RenderList from "../components/conditional-comp/rendering-list";

const ScientistListPage = () => {
  return (
    <>
      {" "}
      <Header />
      <RenderList />
      <ScientiestList />
      <PackingList />
      <Footer />
    </>
  );
};

export default ScientistListPage;
