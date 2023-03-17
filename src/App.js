import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/footer";
import NewsContent from "./components/NewsContent/NewsContent";
import Header from "./components/Header/Header";

// import {Topicstate} from "./Categorycontext";
function App() {
  const [category, setCategory] = useState("all");
  const [newsArray, setnewsArray] = useState([]);
  // const {category}=Topicstate();
  /*useEffect(async () => {
    try {
      let getResponse = await axios.get(

        //`https://inshortsapi.vercel.app/news?category=all`
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
        
      );
      //const jsonResponse=getResponse.json();
      console.log(jsonResponse);
      setnewsArray(getResponse.data);
    } catch (error) {
      console.log(newsArray);
      alert(error);
    }
  },[]*/

  const getData = async () => {
    try {
        // setcategory("health")
        console.log(category);
        let getResponse = await axios.get(
          `https://inshortsapi.vercel.app/news?category=${category}`
          //`https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
        );
        //const jsonResponse=getResponse.json();
        console.log(getResponse);
        setnewsArray(getResponse.data.data);
      } catch (error) {
        console.log(newsArray);
        alert(error);
      }
}
  useEffect(()=>{
      getData();
},[category])

  return (
    <>
       
      <Header getData={getData} setCategory={setCategory}></Header>
      <NewsContent   newsArray={newsArray} ></NewsContent>
      <Footer></Footer>
     
      </>
  );
}

export default App;
