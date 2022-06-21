import React from "react";
import Deliveries from "./components/Deliveries/Deliveries";
import Navbar from "./components/Navbar/Navbar";
import Orders from "./components/Orders/Orders";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import background from "./assets/Other Images/background.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          width: "fit-content",
          backgroundSize: "cover",
        }}
      >
        <Navbar />
        <div>
          <TopNavbar />
          <Orders />
          <Deliveries />
        </div>
      </div>
    </div>
  );
}

export default App;
