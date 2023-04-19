import React from "react";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="headerLeft">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZfk9MM_6KtLou3heJAZ0rZ-bzX1TiXYw6AHfe9ViK4HoW_-O-udBl9DaH53EqsOHpP7PMA3-WiNY&usqp=CAU&ec=48665701"
        />
      </div>
      <div className="headerMid">
        <h3 className="headerText1">Taste The Best</h3>

        <div>
          <div
            onClick={() => navigate("/login")}
            style={{
              position: "relative",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: 20,
              color: "white",
            }}
          >
            Login
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate("/cart")}
        style={{ position: "relative", cursor: "pointer" }}
      >
        <ShoppingCartIcon style={{ color: "white" }} />
        <span
          style={{
            backgroundColor: "white",
            width: 14,
            height: 12,
            borderRadius: 7,
            textAlign: "center",
            position: "absolute",
            bottom: 14,
            left: 14,
            fontSize: 13,
            fontWeight: "400",
          }}
        >
          {cart.length}
        </span>
      </div>
      <div className="headerRight">
        <h4 className="headerText">john deo</h4>
        <h4 className="headerText">9490393030</h4>
      </div>
    </div>
  );
}
export default Header;
