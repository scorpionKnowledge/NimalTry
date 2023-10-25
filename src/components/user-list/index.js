import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../footer";
import Header from "../header";
import UserCardList from "./user-card-list";
import "./style.scss";
const UserListPage = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => {
        setUserList(res.data);
      });
    // fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
    //   .then((response) => response.json())
    //   .then((json) => setUserList(json));
  }, []);
  return (
    <>
      <Header />
      <main>
        <UserCardList Userdata={userList} />
      </main>
      <Footer />
    </>
  );
};

export default UserListPage;
