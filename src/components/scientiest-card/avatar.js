import React from "react";
import { getImageUrl } from "../../utilities/util";
const Avatar = ({ imgID, imgSize, alt }) => {
  let size = imgSize <= 90 ? "s" : "b";
  return (
    <>
      <img
        className="avatar"
        src={getImageUrl(imgID, size)}
        alt={alt}
        height={imgSize}
        width={imgSize}
      />
    </>
  );
};

export default Avatar;
