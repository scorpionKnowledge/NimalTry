import React from "react";
const UserAddress = ({ useraddress }) => {
  const { city, geo, street, suite, zipcode } = useraddress;
  return (
    <>
      <h6>{city}</h6>
      <UsergioLocate gioLocation={geo} />
      <h6>{street}</h6>
      <h6>{suite}</h6>
      <h6>{zipcode}</h6>
    </>
  );
};
const UserCompanyAddress = ({ compayaddress }) => {
  const { name, catchPhrase, bs } = compayaddress;

  return (
    <>
      <h6>{name}</h6>
      <h6>{catchPhrase}</h6>
      <h6>{bs}</h6>
    </>
  );
};
const UsergioLocate = ({ gioLocation }) => {
  const { lat, lng } = gioLocation;
  return (
    <>
      <h6>
        lat:{lat} --- lng: {lng}
      </h6>
    </>
  );
};

const UserCard = ({ usercarddata }) => {
  const { email, name, phone, username, website, address, company } =
    usercarddata;
  return (
    <>
      <article>
        <h2>
          {name} ({username})
        </h2>
        <h6>{email}</h6>
        <h6>{phone}</h6>
        <a href={`https://${website}`} target={"_blank"} rel="noreferrer">
          {website}
        </a>
        <h6>address</h6>
        <UserAddress useraddress={address} />
        <UserCompanyAddress compayaddress={company} />
      </article>
      <hr />
    </>
  );
};

export default UserCard;
