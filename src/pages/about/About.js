import React, { useState } from "react";
import "./about.css";

function About() {
  const [data, setData] = useState("");
  const [brand, setBrand] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [brandCheck, setBrandCheck] = useState(0);
  const [titleCheck, setTitleCheck] = useState(0);
  const [priceCheck, setPriceCheck] = useState(0);
  const [descCheck, setDescCheck] = useState(0);
  const [count, setCount] = useState(0);

  const getData = () => {
    fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then(function (result) {
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
  };
  const getDescription = () => {
    let result = [];
    for (let i = 0; i < data.length; i++) {
      result.push(data[i].description);
    }
    return setDescription(result);
  };
  const checkBoxBrand = () => {
    if (brandCheck === 0) {
      setBrandCheck(1);
    } else if (brandCheck === 1) {
      setBrandCheck(0);
    } else {
      return;
    }
  };
  const checkboxTitle = () => {
    if (titleCheck === 0) {
      setTitleCheck(1);
    } else if (titleCheck === 1) {
      setTitleCheck(0);
    } else {
      return;
    }
  };
  const checkBoxPrice = () => {
    if (priceCheck === 0) {
      setPriceCheck(1);
    } else if (priceCheck === 1) {
      setPriceCheck(0);
    } else {
      return;
    }
  };
  const checkBoxDescription = () => {
    if (descCheck === 0) {
      setDescCheck(1);
    } else if (descCheck === 1) {
      setDescCheck(0);
    } else {
      return;
    }
  };
  const loadData = () => {
    if (count === 0) {
      setCount(1);
      return getData();
    } else {
      return;
    }
  };
  return (
    <div>
      <div className="container">
        <h1 onChange={loadData()}>Products</h1>
        <div className="table">
          <div className="price">
            <h2>Brand</h2>
            <input
              type="checkbox"
              onClick={brandName}
              onChange={checkBoxBrand}
            ></input>
            {brandCheck === 1
              ? brand.map((e, i) => <tr key={i}>{e}</tr>)
              : " theres no data"}
          </div>
          <div className="price">
            <h2>Title</h2>
            <input
              type="checkbox"
              onClick={getTitle}
              onChange={checkboxTitle}
            ></input>
            {titleCheck === 1
              ? title.map((e, i) => <tr key={i}>{e}</tr>)
              : "theres no data"}
          </div>
          <div className="price">
            <h2>Price</h2>
            <input
              type="checkbox"
              onClick={getPrice}
              onChange={checkBoxPrice}
            ></input>
            {priceCheck === 1
              ? price.map((e, i) => <tr key={i}>${e}</tr>)
              : "theres no data"}
          </div>
          <div className="description">
            <h2>Description</h2>
            <input
              type="checkbox"
              onClick={getDescription}
              onChange={checkBoxDescription}
            ></input>
            {descCheck === 1
              ? description.map((e, i) => <tr key={i}>{e}</tr>)
              : "theres no data"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
