import { Box } from "@mui/material";
import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./order.css";
const Order = () => {
  const orders = JSON.parse(localStorage.getItem("order"));

  const currentUser = JSON.parse(localStorage.getItem("current-user"));

  let particularUserOrders = null;
  if (orders && currentUser.email) {
    particularUserOrders = orders[currentUser.email];
  }

  return (
    <Box className="order-container">
      <Navbar user={currentUser} cart={true}></Navbar>

      <Box className="order-card">
        <Box className="order-container">
          {orders &&
            particularUserOrders &&
            Object.keys(particularUserOrders)?.map((order, index) => (
              <>
                <Box className="details-specifications">
                  <Box>{"Name"}</Box>
                  <Box>{"Price"}</Box>
                  <Box>{"Quantity"}</Box>
                </Box>
                <Box className="order-items-details" key={order}>
                  {orders &&
                    particularUserOrders[order] &&
                    Object.keys(particularUserOrders[order])?.map(
                      (item, index) => (
                        <>
                          <Box className="order-items-details-card" key={item}>
                            <Box>
                              {orders[currentUser.email][order][item].dishName}
                            </Box>
                            <Box>
                              {orders[currentUser.email][order][item].price}
                            </Box>
                            <Box>
                              {orders[currentUser.email][order][item].quantity}
                            </Box>
                          </Box>
                        </>
                      )
                    )}
                    </Box>
                  <Box className="total">{"Total"} {orders[currentUser.email][order].total}</Box>
              </>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Order;
