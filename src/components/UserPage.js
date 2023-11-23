import React from "react";
import { useNavigate } from "react-router-dom";
import "./Userpage.css";

export default function UserPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const goLocation = () => {
    navigate("/location");
  };

  const goReporting = () => {
    navigate("/reporting");
  };

  return (
    <div>
      <button onClick={goHome}>Disconnect</button>

      {/* Go to Location */}
      <div className="wrapper" onClick={goLocation}>
        <div className="product-img">
          <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>Harvest Vase</h1>
            <p>
              Harvest Vases are a reinterpretation
              <br /> of peeled fruits and vegetables as
              <br /> functional objects. The surfaces
              <br /> appear to be sliced and pulled aside,
              <br /> allowing room for growth.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* Go to Reporting */}
      <div className="wrapper" onClick={goReporting}>
        <div className="product-img">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            height="420"
            width="327"
          />
        </div>
        <div className="product-info">
          <div className="product-text">
            <h1>Harvest Vase</h1>

            <p>
              Harvest Vases are a reinterpretation
              <br /> of peeled fruits and vegetables as
              <br /> functional objects. The surfaces
              <br /> appear to be sliced and pulled aside,
              <br /> allowing room for growth.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
