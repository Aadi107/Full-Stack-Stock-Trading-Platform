import React, { useState, useContext } from "react";

import {Link} from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const Api_url = process.env.REACT_APP_BACKEND_URL

const BuyActionWindow = ({ uid }) => {
  const {closeBuyWindow} = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
  try {
    const response = await axios.post(
      `${Api_url}/newOrder`,
      {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      },
      {
        withCredentials: true,
      }
    );

    console.log("Order successful:", response.data);
    closeBuyWindow();

  } catch (error) {
    console.error(
      "Error placing order:",
      error.response?.data || error.message
    );
  }
};

  const handleCancelClick = () => {
  closeBuyWindow();
};

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required is ₹125</span>
        <div>
          <div>
            <button
              type="button"
              className="btn btn-blue"
              onClick={handleBuyClick}>
              Buy
            </button>

            <button
              type="button"
              className="btn btn-grey"
              onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
