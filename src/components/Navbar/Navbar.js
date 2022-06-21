import React from "react";
import "./Navbar.css";
import home from "../../assets/Navbar Images/home.png";
import tag from "../../assets/Navbar Images/tag.png";
import shoppingbasket from "../../assets/Navbar Images/shoppingbasket.png";
import list from "../../assets/Navbar Images/list.png";
import wishlist from "../../assets/Navbar Images/wishlist.png";
import user from "../../assets/Navbar Images/user.png";
import barchart from "../../assets/Navbar Images/barchart.png";
import settings from "../../assets/Navbar Images/settings.png";
import power from "../../assets/Navbar Images/power.png";
import photo from "../../assets/Navbar Images/photo.png";

function Navbar() {
  return (
    <div className="outer-nav">
      <div className="navbar">
        <div style={{ paddingBottom: "50px"}} className="element-div2">
          <img id="nav-img" alt="photopng" src={photo} />
          <div id="element-name">Laundry</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="home" src={home} />
          <div id="element-name">Dashboard</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="tag" src={tag} />
          <div id="element-name">Pos</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="shoppingbasket" src={shoppingbasket} />
          <div id="element-name">Orders</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="list" src={list} />
          <div id="element-name">Order Status Screen</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="wishlist" src={wishlist} />
          <div id="element-name">Expense</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="user" src={user} />
          <div id="element-name">Customers</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="tag" src={tag} />
          <div id="element-name">Services</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="barchart" src={barchart} />
          <div id="element-name">Reports</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="settings" src={settings} />
          <div id="element-name">Tools</div>
        </div>
        <div class="element-div">
          <img id="nav-img" alt="power" src={power} />
          <div id="element-name">Logout</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
