import React from 'react';
import axios from "axios";
import  { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Cart/Action";

const Home = () => {
  const [products, setproducts] = useState([]);
    const dispatch = useDispatch();

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/products",
    })
      .then((res) => setproducts(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
    const handleCart = (item) => {
    axios({
      method: "post",
      url: "http://localhost:8080/cart",
      data: {
       item
      },
    }).then((res) => {
      console.log(res);
      dispatch(addToCart(res.data));
      console.log(res);
    });
   
}
  return (
    <div className="item_body" style={{width:"95%",margin:"auto", display:"grid",gridTemplateColumns:"repeat(3, 450px)",gap:'40px'}}>
      {products?.map((item) => (
        <div  key={item.id}>
          <div >
            <div >
              <p>Brand: {item.brand}</p>
              <p>Title: {item.title}</p>
              <p>Category: {item.category} </p>
              <p>Price: {item.price} </p>
            </div>
            <div className="jss11">
              <img src={item.image} alt="" />
              <div style={{width:"100%"}}>
                <Button  variant="outlined" onClick={() => handleCart(item)} >Add to Cart</Button>
                <Button variant="outlined">More Details</Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;