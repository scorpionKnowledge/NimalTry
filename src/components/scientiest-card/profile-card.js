import React from "react";
import Avatar from "./avatar";

const ProfileCard = ({ personJsonList }) => {
  return (
    <>
      <h2>{personJsonList.name}</h2>
      <Avatar
        imgID={personJsonList.imgID}
        imgSize={personJsonList.imgSize}
        alt={personJsonList.name}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {personJsonList.Profession}
        </li>
        <li>
          <b>Awards: </b>
          {personJsonList.Awards}
        </li>
        <li>
          <b>Discovered: </b>
          {personJsonList.Discovered}
        </li>
      </ul>
    </>
  );
};

export default ProfileCard;
