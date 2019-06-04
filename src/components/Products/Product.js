import React from "react";
import Item from "./Item";
import myData from "./data.json";

const Product = () => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0
  });
  return (
    <div className="home">
      <div className="course">
        {myData.map((val, key) => {
          return (
            <Item key={key} price={formatter.format(val.price)} pId={val.id}>
              {val.name}
            </Item>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
