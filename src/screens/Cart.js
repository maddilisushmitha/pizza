import React, { useState } from "react";
import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { decrementQuantity, incrementQuantity } from "../redux/CartSlice";
import "./Form.css";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    dispatch(decrementQuantity(item));
  };
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  console.log(total);
  const [placed, setPlaced] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`placed:${placed}`);
  };

  return (
    <>
      <Header />
      <div className="cart">
        <div className="cartLeft">
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="cartimage">
                <img
                  src={item.image}
                  style={{ height: 60, width: 60, borderRadius: 5 }}
                />
              </div>

              <div className="cartDescription">
                <h3 className="carttext">{item.name}</h3>
                <h4 className="carttextDescription">
                  {item.description.length > 30
                    ? item.description.substr(0, 80) + "..."
                    : item.description}
                </h4>
                <h4 className="carttype">Regular | 100% thin white crust</h4>
              </div>
              <div style={{ marginLeft: "auto" }} className="carttotal">
                {/* <h4>{item.price + item.quantity}</h4> */}
                <h4>{item.price}</h4>
                <div className="cartButtons">
                  <div
                    onClick={() => increaseQuantity(item)}
                    className="cartButton"
                  >
                    +
                  </div>
                  <div className="cartButton">{item.quantity}</div>
                  <div
                    onClick={() => decreaseQuantity(item)}
                    className="cartButton"
                  >
                    -
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cartRight">
          <h3 className="cartRightText">choose Delivery Address</h3>

          <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <br />
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <br />
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Address</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
            <div class="form-group">
              <label for="inputAddress2">Address 2</label>
              <br />
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <br />
                <input type="text" class="form-control" id="inputCity" />
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <br />
                <select id="inputState" class="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <br />
                <input type="text" class="form-control" id="inputZip" />
              </div>
            </div>
            <div class="form-group">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  <br />
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
            <br />
          </form>

          <div className="cartTop"></div>
          <h3 className="cartRightText">price details</h3>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 500 }}>subtotal</h4>
              <h4 style={{ fontSize: 15, fontWeight: 500 }}>{total}</h4>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 500 }}>Discount</h4>
              <h4 style={{ fontSize: 15, fontWeight: 500 }}>-</h4>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: 500 }}>
                taxes and charges
              </h4>
              <h4 style={{ fontSize: 15, fontWeight: 500 }}>33</h4>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 5,
              }}
            >
              <h4 style={{ fontSize: 15, fontWeight: "bold" }}>Grand TOTAL</h4>
              <h4 style={{ fontSize: 15, fontWeight: 600 }}>{total + 65}</h4>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <button
              className="cartButtonRight"
              type="text"
              value={placed}
              onChange={(e) => setPlaced(e.target.value)}
            >
              PlaceOrder
            </button>
            <a
              href="#"
              class="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              place order
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cart;
