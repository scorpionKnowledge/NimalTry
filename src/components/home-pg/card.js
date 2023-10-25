import React from "react";

const formatDate = (date) => date.toLocaleDateString();
const date = new Date();

const Card = ({ carddata, callFun }) => {
  const { id, title, url, thumbnailUrl } = carddata;
  return (
    <>
      <article>
        <hr />
        <img src={thumbnailUrl} alt={title} />
        {/* <p>{albumId}</p> */}
        <p>{id}</p>
        <p>{title}</p>
        <p>{url}</p>
        <p>{thumbnailUrl}</p>
        <p>{formatDate(date)}</p>
        {callFun(formatDate(date))}
      </article>
    </>
  );
};

export default Card;
