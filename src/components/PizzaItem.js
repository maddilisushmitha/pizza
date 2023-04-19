import React from "react";
import "./PizzaItem.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/CartSlice";

function PizzaItem({ pizza }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      <div className="pizzaItem">
        <div className="pizzaItemOuterContainer">
          <img
            style={{ width: 250, height: 180, justifyContent: "space-between" }}
            src={pizza.image}
          />
          <div className="pizzaItemcontainer">
            <h4 className="pizzaItemText">{pizza.name}</h4>

            <h4 className="pizzaItemDescriptin">
              {pizza.description.length > 30
                ? pizza.description.substr(0, 30) + "..."
                : pizza.description}
            </h4>
            {cart.some((c) => c.id === pizza.id) ? (
              <button
                onClick={() => removeItemFromCart(pizza)}
                className="pizzaItemButton"
              >
                Remove From Cart
              </button>
            ) : (
              <button
                onClick={() => addItemToCart(pizza)}
                className="pizzaItemButton"
              >
                Add To Cart
              </button>
            )}

            <h4>{pizza.price} Rs</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default PizzaItem;
