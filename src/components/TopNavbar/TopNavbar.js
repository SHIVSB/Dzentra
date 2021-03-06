import React from "react";
import "./TopNavbar.css";
import tag from "../../assets/Navbar Images/tag.png";
import plus from "../../assets/Navbar Images/plus.png";

function TopNavbar() {
  return (
    <div
      className="nav-top"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "transparent",
      }}
    >
      <div>
        <svg
          className="menubar"
          style={{
            height: "30px",
            width: "30px",
            marginLeft: "2vw",
            fill: "white",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </div>
      <div
        style={{
          marginTop: "2.5px",
          marginRight: "2vw",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{ height: "25px", width: "25px", paddingRight: "10px" }}
          alt="plus"
          src={plus}
        />
        <img
          style={{ height: "25px", width: "25px", paddingRight: "10px" }}
          alt="tag"
          src={tag}
        />
        <svg
          style={{
            height: "25px",
            width: "25px",
            paddingRight: "10px",
            fill: "white",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
        </svg>
        <select className="options">
          <option value="0">ENGLISH</option>
          <option value="1">HINDI</option>
          <option value="2">FRENCH</option>
          <option value="3">ITALIAN</option>
          <option value="4">JAPANESE</option>
        </select>
        <div>
          <svg
            className="menubar2"
            style={{
              height: "30px",
              width: "30px",
              marginLeft: "20px",
              fill: "white",
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
