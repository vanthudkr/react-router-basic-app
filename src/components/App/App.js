import React from "react";
import Nav from "../Nav/Nav";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import "./App.css";
import Product from "../Products/Product";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
