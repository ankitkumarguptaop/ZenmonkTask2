import {
  Alert,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import restraudantImage from "../../images/restraunt-image.jpg";
import ratingImage from "../../images/rating.png";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import QuantityButton from "../../components/add-to-cart-button/button";
import "./restraduant.css";

const Restraudant = () => {
  const [alerMessage, setAlertMessage] = useState(false);

  const menu = JSON.parse(localStorage.getItem("menu"));
  const currentuser = JSON.parse(localStorage.getItem("current-user"));

  const { state } = useLocation();
  const user = state[0];
  console.log("user", user);
  console.log("menu user", menu[user]);

  console.log("line2");
  console.log(menu);

  function setParticularCart() {}

  return (
    <>
      <Navbar user={currentuser} cart={true}></Navbar>
      <Box className="display-menu">
        {menu &&
          user &&
          menu[user] &&
          Object.keys(menu[user])?.map((id, index) => (
            <Box className="menu-card" key={id}>
              <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                <CardMedia
                  sx={{ height: 170 }}
                  image={restraudantImage}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {menu[user][id].dishName}
                  </Typography>
                  <Box className="price-ratting">
                    <Typography
                      variant="body1"
                      sx={{ color: "text.secondary" }}
                    >
                      {menu[user][id].price} {"₹ "}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {menu[user][id].rating}{" "}
                      <img
                        src={ratingImage}
                        alt=""
                        style={{ height: "15px" }}
                      />
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {menu[user][id].description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box className="quantity-setting">
                    <QuantityButton
                      id={id}
                      setParticularCart={setParticularCart}
                      alerMessage={setAlertMessage}
                    >
                      {" "}
                    </QuantityButton>
                  </Box>
                </CardActions>
              </Card>
            </Box>
          ))}
      </Box>
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

export default Restraudant;
