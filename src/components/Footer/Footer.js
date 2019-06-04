import React from "react";
import { withRouter } from "react-router-dom";

const Footer = props => {
  console.log(props.history);
  return (
    <div className="footer">
      <h4> My name is Footer </h4>
    </div>
  );
};

export default withRouter(Footer);
