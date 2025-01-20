import React, { useState } from "react";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const AddToCartButton = ({
  id,
  addCart = true,
  setParticularCart,
  setTotal,
  alerMessage,
}) => {
  const menu = JSON.parse(localStorage.getItem("menu"));
  const currentuser = JSON.parse(localStorage.getItem("current-user"));
  const cart = JSON.parse(localStorage.getItem("cart"));
  const currentRestraunt = JSON.parse(
    localStorage.getItem("current-restrauant")
  );

  let initialQuantity = 0;
  if (
    cart &&
    id &&
    cart[`${currentRestraunt.email}-${currentuser.email}`] &&
    cart[`${currentRestraunt.email}-${currentuser.email}`][id]
  ) {
    initialQuantity =
      cart[`${currentRestraunt.email}-${currentuser.email}`][id].quantity;
  }

  const [quantity, setQuantity] = useState(initialQuantity);

  const restraunt = currentRestraunt.email;
  console.log("state1", restraunt);

  console.log("line2");

  function incrementQuantity() {
    const cart = JSON.parse(localStorage.getItem("cart"));

    alerMessage(true);
    setTimeout(() => {
      alerMessage(false);
    }, 1500);
    setQuantity(quantity + 1);
    if (cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...cart,
          [`${restraunt}-${currentuser.email}`]: {
            ...cart[`${restraunt}-${currentuser.email}`],
            [id]: {
              dishName: menu[restraunt][id].dishName,
              price: menu[restraunt][id].price,
              quantity: quantity + 1,
            },
          },
        })
      );
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          [`${restraunt}-${currentuser.email}`]: {
            [id]: {
              dishName: menu[restraunt][id].dishName,
              price: menu[restraunt][id].price,
              quantity: quantity + 1,
            },
          },
        })
      );
    }

    setParticularCart(
      JSON.parse(localStorage.getItem("cart"))[
        `${currentRestraunt.email}-${currentuser.email}`
      ]
    );
  }

  function decrementQuantity() {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (quantity >= 1) {
      setQuantity(quantity - 1);
      if (cart) {
        localStorage.setItem(
          "cart",
          JSON.stringify({
            ...cart,
            [`${restraunt}-${currentuser.email}`]: {
              ...cart[`${restraunt}-${currentuser.email}`],
              [id]: {
                dishName: menu[restraunt][id].dishName,
                price: menu[restraunt][id].price,
                quantity: quantity - 1,
              },
            },
          })
        );
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify({
            [`${restraunt}-${currentuser.email}`]: {
              [id]: {
                dishName: menu[restraunt][id].dishName,
                price: menu[restraunt][id].price,
                quantity: quantity - 1,
              },
            },
          })
        );
      }
    }
    if (quantity <= 1) {
      delete cart[`${currentRestraunt.email}-${currentuser.email}`][id];
      localStorage.setItem(
        "cart",
        JSON.stringify({
          ...cart,
        })
      );
      setQuantity(0);
    }

    setParticularCart(
      JSON.parse(localStorage.getItem("cart"))[
        `${currentRestraunt.email}-${currentuser.email}`
      ]
    );
  }

  return (
    <>
      <Box className="quantity-setting">
        <Button
          className="increment"
          variant="contained"
          onClick={incrementQuantity}
        >
          +
        </Button>
        <Box className="quantity">{quantity}</Box>
        <Button
          className="decrement"
          variant="contained"
          onClick={decrementQuantity}
        >
          -
        </Button>
      </Box>
    </>
  );
};

export default AddToCartButton;
