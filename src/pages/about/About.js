import React, { useState } from "react";
import "./about.css";

function About() {
  const [data, setData] = useState("");
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const getDat = () => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then(function (result) {
        //console.log('Result', result)
        setData(result.products);
      })
      .catch((error) => console.log("error"));
  };
  const getTitle = () => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].title);
    }
    return setTitle(result);
  };
  const brandName = () => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].brand);
    }
    return setBrand(result);
  };
  const getPrice = () => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].price);
    }
    return setPrice(result);
  }
  const getDescription = () => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].description);
    }
    return setDescription(result);
  }
  return (
    <div>
      <h1>Store</h1>
      <div className="container">
          <input type="checkbox" onClick={getDat}></input>
          <div className="table">
          <div className="price"><h2>Brand</h2><input type="checkbox" onClick={brandName}></input>
          {brand.length > 0 ? brand.map((e) => <tr>{e}</tr>) : " theres no data"}
          </div>
         <div className="price"><h2>Title</h2><input type="checkbox" onClick={getTitle}></input>
          {title.length > 0 ? title.map((e) => <tr>{e}</tr>) : "theres no data"}
          </div>
        <div className="price"><h2>Price</h2><input type="checkbox" onClick={getPrice}></input>
        {price.length > 0 ? price.map((e) => <tr>${e}</tr>) : "theres no data"}</div>
        <div className="description"><h2>Description</h2><input type="checkbox" onClick={getDescription}></input>
        {description.length > 0 ? description.map((e) => <tr>{e}</tr>) : "theres no data"}
        </div>
        </div>
      </div>
    </div>
  );
}

export default About;
