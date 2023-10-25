import React, { useEffect, useState } from "react";
import Footer from "../footer";
import Header from "../header";
import CardList from "./card-list";
import { CardDetail } from "../../api/method";

const HomePage = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const apiCall = async () => {
    try {
      const headers = {
        Accept: "application/json",
        "Accept-Encoding": "identity",
      };
      const count = 10;

      const cardInformation = await CardDetail(headers, count);
      // console.log(`Github username ${githubUserName} has real name: ${data?.name} and works at ${data?.company}`,);
      console.log(
        `Successful response took ${cardInformation.durationInMs} milliseconds`
      );

      setCardDetails(cardInformation.data);

      // //the below request will fail
      // const nonExistinggithubUserName = "thisUserShouldNotBeOnGithub";
      // const failingUrl = `https://api.github.com/users/${nonExistinggithubUserName}`;
      // console.log(`Sending a GET reqeust to: ${failingUrl}`);
      // const response = await axios.get(failingUrl, headers);
      // console.log(response.data); //it will never reach here as get will hit a 404, it will go to the catch part
    } catch (err) {
      console.log(`Error message : ${err.message} - `, err.code);
      console.log(`Error response took ${err.durationInMs} milliseconds`);
    }
  };
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
    //   .then((response) => response.json())
    //   .then((json) => setCardDetails(json));
    // Make a request for a user with a given ID
    //   axios
    //     .get("https://jsonplaceholder.typicode.com/photos", {
    //       params: {
    //         _limit: 2,
    //       },
    //     })
    //     .then((response) => {
    //       setCardDetails(response.data);
    //     })
    //     .catch(function (error) {
    //       // handle error
    //       console.log(error);
    //     })
    //     .finally(function () {
    //       // always executed
    //     });
    apiCall();
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
        <CardList data={cardDetails} callFunction={dateGetfun} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
