import React from "react";
import Card from "./card";

const CardList = ({ data, callFunction }) => {
  console.log(data);
  return (
    <>
      <section>
        {data.map((dataVal) => {
          return (
            <Card key={dataVal.id} carddata={dataVal} callFun={callFunction} />
          );
        })}
      </section>
    </>
  );
};

export default CardList;
