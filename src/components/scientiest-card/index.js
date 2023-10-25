import React from "react";
import ProfileCard from "./profile-card";
const ScientiestItems = ({ children }) => {
  return <section className="profile">{children}</section>;
};
const ScientiestList = () => {
  const personJson = [
    {
      name: "Maria Skłodowska-Curie",
      imgID: "szV5sdG",
      imgSize: "90",
      Profession: "physicist and chemist",
      Awards:
        "4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)",
      Discovered: "polonium (chemical element)",
    },
    {
      name: "Katsuko Saruhashi",
      imgID: "YfeOqp2",
      imgSize: "90",
      Profession: "geochemist",
      Awards: "2 (Miyake Prize for geochemistry, Tanaka Prize)",
      Discovered: "a method for measuring carbon dioxide in seawater",
    },
    {
      name: "yung chan",
      imgID: "2hakYvC",
      imgSize: "90",
      Profession: "geochemist",
      Awards: "999 (Miyake Prize for geochemistry, Tanaka Prize)",
      Discovered: "a method for measuring carbon dioxide in seawater",
    },
  ];
  return (
    <>
      <h1>Notable Scientists</h1>
      {personJson.map((personJsonList) => {
        return (
          <ScientiestItems>
            <ProfileCard personJsonList={personJsonList} />
          </ScientiestItems>
        );
      })}
    </>
  );
};

export default ScientiestList;
