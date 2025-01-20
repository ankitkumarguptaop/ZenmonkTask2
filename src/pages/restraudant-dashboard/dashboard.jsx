import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  FormControl,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import "./dashboard.css";
import restraudantImage from "../../images/restraunt-image.jpg";
import ratingImage from "../../images/rating.png";

import { uid } from "uid";
import CustomInput from "../../components/input/input";
const Dashboard = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 450,
    bgcolor: "#FFFFFF",
    border: "2px solid #000",
    boxShadow: 24,
    p: 6,
  };

  const user = JSON.parse(localStorage.getItem("current-user"));
  console.log(user.email);

  let menu = JSON.parse(localStorage.getItem("menu"));
  console.log(menu);

  const [allMenu, setAllMenu] = useState(menu);
  const [editState, setEditState] = useState(false);
  const [currentMenu, setCurrentMenue] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    setEditState(false);
    setInput({
      dishName: "",
      price: "",
      description: "",
      rating: "",
    });
  };
  const handleClose = () => setOpen(false);

  const [input, setInput] = useState({
    dishName: "",
    price: "",
    description: "",
    rating: "",
  });

  const [error, setError] = useState({
    dishNameError: false,
    priceError: false,
    descriptioError: false,
    ratingError: false,
  });

  function handelDishName(e) {
    if (e.target.value.length === 0) {
      setError({
        dishNameError: true,
        priceError: error.priceError,
        descriptioError: error.descriptioError,
        ratingError: error.ratingError,
      });
    } else {
      setError({
        dishNameError: false,
        priceError: error.priceError,
        descriptioError: error.descriptioError,
        ratingError: error.ratingError,
      });
    }
    setInput({
      dishName: e.target.value,
      price: input.price,
      rating: input.rating,
      description: input.description,
    });
  }

  function handelPrice(e) {
    if (
      isNaN(e.target.value) ||
      !isFinite(e.target.value) ||
      parseInt(e.target.value) < 0 ||
      e.target.value.length === 0
    ) {
      setError({
        dishNameError: error.dishNameError,
        priceError: true,
        descriptioError: error.descriptioError,
        ratingError: error.ratingError,
      });
    } else {
      setError({
        dishNameError: error.dishNameError,
        priceError: false,
        descriptioError: error.descriptioError,
        ratingError: error.ratingError,
      });
    }
    setInput({
      dishName: input.dishName,
      price: e.target.value,
      rating: input.rating,
      description: input.description,
    });
  }

  function handelDescription(e) {
    if (e.target.value.length === 0) {
      setError({
        dishNameError: error.dishNameError,
        priceError: error.priceError,
        descriptioError: true,
        ratingError: error.ratingError,
      });
    } else {
      setError({
        dishNameError: error.dishNameError,
        priceError: error.priceError,
        descriptioError: false,
        ratingError: error.ratingError,
      });
    }

    setInput({
      dishName: input.dishName,
      price: input.price,
      rating: input.rating,
      description: e.target.value,
    });
  }

  function handelRating(e) {
    if (
      isNaN(e.target.value) ||
      !isFinite(e.target.value) ||
      parseInt(e.target.value) <= 0 ||
      parseInt(e.target.value) > 5
    ) {
      setError({
        dishNameError: error.dishNameError,
        priceError: error.priceError,
        descriptioError: error.descriptioError,
        ratingError: true,
      });
    } else {
      setError({
        dishNameError: error.dishNameError,
        priceError: error.priceError,
        descriptioError: error.descriptioError,
        ratingError: false,
      });
    }
    setInput({
      dishName: input.dishName,
      price: input.price,
      rating: e.target.value,
      description: input.description,
    });
  }

  function handleEditMenu(id) {
    setOpen(true);
    setEditState(true);
    setCurrentMenue(id);
    console.log(id);
    setInput({
      dishName: allMenu[user.email][id].dishName,
      price: allMenu[user.email][id].price,
      description: allMenu[user.email][id].description,
      rating: allMenu[user.email][id].rating,
    });
  }

  function handleDeleteMenue(id) {
    console.log(id);
    delete menu[user.email][id];
    localStorage.setItem(
      "menu",
      JSON.stringify({
        ...menu,
      })
    );
    setAllMenu(JSON.parse(localStorage.getItem("menu")));

    setInput({
      dishName: "",
      price: "",
      description: "",
      rating: "",
    });
  }
  let nameerror = false;
  let priceerror = false;
  let descriptionerror = false;
  let ratingerror = false;
  function addOrEditMenu() {
    if (
      isNaN(input.rating) ||
      !isFinite(input.rating) ||
      parseInt(input.rating) <= 0 ||
      parseInt(input.rating) > 5 ||
      input.rating.length === 0
    ) {
      ratingerror = true;
    }
    if (input.dishName.length <= 0) {
      nameerror = true;
    }
    if (input.description.length <= 0) {
      descriptionerror = true;
    }

    if (
      isNaN(input.price) ||
      !isFinite(input.price) ||
      parseInt(input.price) < 0 ||
      input.price.length === 0
    ) {
      priceerror = true;
    }

    setError({
      dishNameError: nameerror,
      priceError: priceerror,
      descriptioError: descriptionerror,
      ratingError: ratingerror,
    });
    if (!priceerror && !nameerror && !descriptionerror && !ratingerror) {
      if (!editState) {
        if (menu) {
          localStorage.setItem(
            "menu",
            JSON.stringify({
              ...menu,
              [user.email]: {
                ...menu[user.email],
                [`${uid(15)}`]: {
                  dishName: input.dishName,
                  price: input.price,
                  description: input.description,
                  rating: input.rating,
                },
              },
            })
          );
        } else {
          localStorage.setItem(
            "menu",
            JSON.stringify({
              [user.email]: {
                [`${uid(15)}`]: {
                  dishName: input.dishName,
                  price: input.price,
                  description: input.description,
                  rating: input.rating,
                },
              },
            })
          );
        }

        setAllMenu(JSON.parse(localStorage.getItem("menu")));
      } else {
        localStorage.setItem(
          "menu",
          JSON.stringify({
            ...menu,
            [user.email]: {
              ...menu[user.email],
              [currentMenu]: {
                dishName: input.dishName,
                price: input.price,
                description: input.description,
                rating: input.rating,
              },
            },
          })
        );
      }
      setAllMenu(JSON.parse(localStorage.getItem("menu")));

      setInput({
        dishName: "",
        price: "",
        description: "",
        rating: "",
      });
      setOpen(false);
    }
  }

  return (
    <Box className="dashboard-container">
      <Navbar user={user}></Navbar>
      <Button
        disableRipple
        disableElevation
        className="add-menu-button"
        onClick={handleOpen}
      >
        Add Menu
      </Button>
      <FormControl className="form">
        <Modal
          sx={style}
          className="add-menu-modal"
          disableRipple
          disableElevation
          open={open}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="modal-background">
            <Button
              disableRipple
              disableElevation
              className="close-add-menu-modal"
              onClick={handleClose}
            >
              Close
            </Button>
            <Box className="add-functionality">
              <Box className="add-text">Add Item</Box>
              <Box className="form">
                <Box className="input">
                  <CustomInput
                    errorState={error.dishNameError}
                    value={input.dishName}
                    className="input-name"
                    handlerState={handelDishName}
                    label="Item Name"
                  ></CustomInput>
                </Box>
                <Box className="input">
                  <CustomInput
                    errorState={error.priceError}
                    value={input.price}
                    className="input-price"
                    handlerState={handelPrice}
                    label="Price"
                  ></CustomInput>
                </Box>

                <Box className="input">
                  <CustomInput
                    errorState={error.descriptioError}
                    value={input.description}
                    className="input-description"
                    handlerState={handelDescription}
                    label="Description"
                  ></CustomInput>
                </Box>
                <Box className="input">
                  <CustomInput
                    errorState={error.ratingError}
                    value={input.rating}
                    className="input-rating"
                    handlerState={handelRating}
                    label="Rating"
                  ></CustomInput>
                </Box>
                <Button
                  disableRipple
                  disableElevation
                  className="add-to-menu"
                  onClick={() => addOrEditMenu(null)}
                >
                  {editState ? "Edit" : "Add"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </FormControl>
      <Box className="display-menu">
        {allMenu &&
          allMenu[user.email] &&
          Object.keys(allMenu[user.email])?.map((id, index) => (
            <>
              <Box className="menu-card" key={id}>
                <Card sx={{ maxWidth: 345, minWidth: 250 }}>
                  <CardMedia
                    sx={{ height: 170 }}
                    image={restraudantImage}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {allMenu[user.email][id].dishName}
                    </Typography>
                    <Box className="price-ratting">
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary" }}
                      >
                        {allMenu[user.email][id].price} {"₹ "}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {allMenu[user.email][id].rating}{" "}
                        <img
                          src={ratingImage}
                          alt=""
                          style={{ height: "15px" }}
                        />
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {allMenu[user.email][id].description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      disableRipple
                      disableElevation
                      className="edit-menu"
                      onClick={() => handleEditMenu(id)}
                    >
                      Edit
                    </Button>
                    <Button
                      disableRipple
                      disableElevation
                      className="delete-menu"
                      onClick={() => handleDeleteMenue(id)}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            </>
          ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
