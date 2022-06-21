import React from "react";
import "./Deliveries.css";
import shoppingbasket from "../../assets/Navbar Images/shoppingbasket.png";

function Deliveries() {
  return (
    <div className="del">
      <div className="all-deliveries">
        <div className="top-heading">
          <div style={{ color: "gray", fontSize: "3vh" }}>
            Today's Delivery
          </div>
          <div>
            <input placeholder="Search Here" />
          </div>
          <select className="option">
            <option value="0">All Orders</option>
            <option value="1">First</option>
            <option value="2">Second</option>
            <option value="3">Third</option>
            <option value="4">Fourth</option>
          </select>
        </div>
        <div className="deliveries">
          <div id="first-delivery" className="individual-delivery">
            <div>
              <div>98659865</div>
              <img
                className="image-delivery"
                alt="shoppingbasket"
                src={shoppingbasket}
              />
            </div>
            <div>ORD-0948</div>
          </div>
          <div id="second-delivery" className="individual-delivery">
            <div>
              <div>ARIF</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                  className="image-delivery"
                  alt="shoppingbasket"
                  src={shoppingbasket}
                />
                <img
                  className="image-delivery"
                  alt="shoppingbasket"
                  src={shoppingbasket}
                />
              </div>
            </div>
            <div>ORD-0949</div>
          </div>
          <div id="third-delivery" className="individual-delivery">
            <div>
              <div>shiyas</div>
              <img
                className="image-delivery"
                alt="shoppingbasket"
                src={shoppingbasket}
              />
            </div>
            <div>ORD-0950</div>
          </div>
          <div id="fourth-delivery" className="individual-delivery">
            <div>
              <div>Walk in Customer</div>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                <img
                  className="image-delivery"
                  alt="shoppingbasket"
                  src={shoppingbasket}
                />
                <img
                  className="image-delivery"
                  alt="shoppingbasket"
                  src={shoppingbasket}
                />
              </div>
            </div>
            <div>ORD-0951</div>
          </div>
        </div>
      </div>

      <div className="overview">
        <div className="heading">Overview</div>
        <div className="outerpie">
          {/* <div className="piechart"> */}
          <div class="donut">
            <div class="hole"></div>
          </div>
          {/* </div> */}
        </div>
        <div className="order-status">
          <li style={{ color: "red" }}>
            <span style={{ color: "black" }}>Pending</span>
          </li>
          <li style={{ color: "green" }}>
            <span style={{ color: "black" }}>Processing</span>
          </li>
          <li style={{ color: "blue" }}>
            <span style={{ color: "black" }}>Ready To Deliver</span>
          </li>
          <li style={{ color: "gray" }}>
            <span style={{ color: "black" }}>Delivered</span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Deliveries;
