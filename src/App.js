import React from "react";
import "./App.css";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Apod from "./components/apod_components/Apod";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <Apod />
      <Footer />
    </div>
  );
}

export default App;
