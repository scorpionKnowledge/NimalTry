import React from "react";
import UserCard from "./user-card";

const UserCardList = ({ Userdata }) => {
  return (
    <>
      <section>
        {Userdata.map((userdataVal) => {
          return <UserCard key={userdataVal.id} usercarddata={userdataVal} />;
        })}
      </section>
    </>
  );
};

export default UserCardList;
