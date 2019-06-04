import React from "react";
import myData from "../Products/data.json";

const Detail = props => {
  const pId = parseInt(props.match.params.id);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0
  });
  return (
    <div className="home">
      {myData.map((val, key) => {
        if (val.id === pId) {
          return (
            <div key={key}>
              <h3>Product name: {val.name}</h3>
              <h3>Price: {formatter.format(val.price)}</h3>
            </div>
          );
        }
        return "";
      })}
    </div>
  );
};

export default Detail;
