import React, { useState } from "react";
import { Alert, Box, Button } from "@mui/material";
import Navbar from "../../components/navbar/navbar";
import "./cart.css";
import EditQuantityButton from "../../components/add-to-cart-button/button";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import Cartimage from "../../images/emptycart.png";
const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const orders = JSON.parse(localStorage.getItem("order"));
  const currentUser = JSON.parse(localStorage.getItem("current-user"));
  const currentRestraunt = JSON.parse(
    localStorage.getItem("current-restrauant")
  );
  const [alerMessage, setAlertMessage] = useState(false);
  const navigate = useNavigate();

  let initialParticularCart = {};

  if (cart && cart[`${currentRestraunt.email}-${currentUser.email}`]) {
    initialParticularCart =
      cart[`${currentRestraunt.email}-${currentUser.email}`];
    console.log(initialParticularCart);
  }
  const [particularCart, setParticularCart] = useState(initialParticularCart);

  function calulateTotalPrice() {
    let Totalsum = 0;
    if (
      JSON.parse(localStorage.getItem("cart")) &&
      JSON.parse(localStorage.getItem("cart"))[
        `${currentRestraunt.email}-${currentUser.email}`
      ]
    ) {
      Totalsum = Object.keys(
        JSON.parse(localStorage.getItem("cart"))[
          `${currentRestraunt.email}-${currentUser.email}`
        ]
      )?.reduce(
        (accumulator, item) =>
          accumulator +
          parseInt(particularCart[item].price) *
            parseInt(particularCart[item].quantity),
        0
      );
    }
    return Totalsum;
  }

  console.log("line", particularCart);

  function placedOrder() {
    if (JSON.parse(localStorage.getItem("order"))) {
      localStorage.setItem(
        "order",
        JSON.stringify({
          ...orders,
          [`${currentUser.email}`]: {
            ...orders[`${currentUser.email}`],
            [`${uid(15)}`]: {
              ...particularCart,
              total: calulateTotalPrice(),
            },
          },
        })
      );
    } else {
      localStorage.setItem(
        "order",
        JSON.stringify({
          [`${currentUser.email}`]: {
            [uid(15)]: {
              ...particularCart,
              total: calulateTotalPrice(),
            },
          },
        })
      );
    }
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    delete currentCart[`${currentRestraunt.email}-${currentUser.email}`];
    localStorage.setItem(
      "cart",
      JSON.stringify({
        ...currentCart,
      })
    );
    navigate(`/${currentUser.email}/orders`);
    if (
      JSON.parse(localStorage.getItem("cart"))[
        `${currentRestraunt.email}-${currentUser.email}`
      ]
    ) {
      console.log("gvhgvghvhg");
    }
  }

  return (
    <>
      <Navbar user={currentUser}></Navbar>

      {particularCart &&
      cart &&
      Boolean(localStorage.getItem("cart") !== "{}") &&
      Boolean(Object.keys(JSON.parse(localStorage.getItem("cart"))).length) &&
      Boolean(
        Object.keys(
          JSON.parse(localStorage.getItem("cart"))[
            `${currentRestraunt.email}-${currentUser.email}`
          ]
        ).length
      ) ? (
        <Box className="cart-container">
          <Box className="cart-specification">
            <Box>{"Name"}</Box>
            <Box>{"price"}</Box>
            <Box>{"quantity"}</Box>
            <Box>{"edit"}</Box>
          </Box>
          <Box className="cart-box">
            {cart &&
              particularCart &&
              Object.keys(particularCart)?.map((item, index) => (
                <>
                  <Box className="cart-card" key={item}>
                    <Box className="cart-table">
                      {particularCart[item].dishName}
                    </Box>
                    <Box className="cart-table">
                      {particularCart[item].price}
                    </Box>
                    <Box className="cart-table">
                      {particularCart[item].quantity}
                    </Box>
                    <Box className="button">
                      <EditQuantityButton
                        id={item}
                        addCart={false}
                        setParticularCart={setParticularCart}
                        alerMessage={setAlertMessage}
                      ></EditQuantityButton>
                    </Box>
                  </Box>
                </>
              ))}
          </Box>

          <Box className="total-price">
            {"TOTAL : "}
            {"₹"}
            {calulateTotalPrice()}
          </Box>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            onClick={placedOrder}
          >
            Place Order
          </Button>
        </Box>
      ) : (
        <>
          <Box className="empty-cart">
            <img src={Cartimage} alt="" />
          </Box>
        </>
      )}
      <Box className="alert-messsage">
        {alerMessage && (
          <Alert variant="filled" severity="success" sx={{ width: "30%" }}>
            Item Added
          </Alert>
        )}
      </Box>
    </>
  );
};

export default Cart;
