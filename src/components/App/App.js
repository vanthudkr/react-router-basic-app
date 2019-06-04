import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./App.css";
import RouterURL from "../RouterURL/RouterURL";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <RouterURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
