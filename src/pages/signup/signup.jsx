import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LeftImage from "../../images/left-image.png";
import TextField from "@mui/material/TextField";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import "./signup.css";
const SignUp = () => {
  const navigate = useNavigate();
  const label = { inputProps: { 'aria-label': 'Checkbox demo'}};

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState({
    firstNameError: false,
    lastNameError: false,
    emailError: false,
    passwordError: false,
  });

  function handleFirstName(e) {
    // setName(e.target.value);
    setInput({
      email: input.email,
      firstName: e.target.value.replace(/\s+/g, " ").trim(),
      lastName: input.email,
      password: input.password,
    });
    if (e.target.value.replace(/\s+/g, " ").trim().length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        firstNameError: true,
        lastNameError: error.lastNameError,
      });
    } else {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        firstNameError: false,
        lastNameError: error.lastNameError,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        firstNameError: false,
        lastNameError: error.lastNameError,
      });
    }
  }

  function handleLastName(e) {
    // setName(e.target.value);
    setInput({
      email: input.email,
      firstName: input.firstName,
      lastName: e.target.value,
      password: input.password,
    });
    if (input.lastName.replace(/\s+/g, " ").trim().length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        firstNameError: error.firstNameError,
        lastNameError: true,
      });
    } else {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        firstNameError: error.firstNameError,
        lastNameError: false,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: error.passwordError,
        firstNameError: error.firstNameError,
        lastNameError: false,
      });
    }
  }

  function handleEmail(e) {
    setInput({
      email: e.target.value,
      firstName: input.firstName,
      lastName: input.lastName,
      password: input.password,
    });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(e.target.value)) {
      setError({
        emailError: true,
        passwordError: error.passwordError,
        firstNameError: error.firstNameError,
        lastNameError: error.lastNameError,
      });
    } else {
      setError({
        emailError: false,
        passwordError: error.passwordError,
        firstNameError: error.firstNameError,
        lastNameError: error.lastNameError,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: false,
        passwordError: error.passwordError,
        firstNameError: error.firstNameError,
        lastNameError: error.lastNameError,
      });
    }
  }

  function handlePassword(e) {
    setInput({
      email: input.email,
      firstName: input.firstName,
      lastName: input.lastName,
      password: e.target.value,
    });
    var passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!passwordPattern.test(e.target.value)) {
      setError({
        emailError: error.emailError,
        passwordError: true,
        firstNameError: error.firstNameError,
        lastNameError: error.lastNameError,
      });
    } else {
      setError({
        emailError: error.emailError,
        passwordError: false,
        firstNameError: error.firstNameError,
        lastNameError: error.lastNameError,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: false,
        firstNameError: error.firstNameError,
        lastNameError: error.lastNameError,
      });
    }
  }

  function handleSignUp(e) {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
    let currentEmailError = false;
    let currentPasswordError = false;
    let currentFirstNameError = false;
    let currentLastnameError = false;
    if (!emailPattern.test(input.email)) {
      currentEmailError = true;
      // setError({
      //   emailError:true,
      //   passwordError: error.passwordError,
      //   firstNameError:error.firstNameError,
      //   lastNameError:error.lastNameError
      //  });
      console.log(error);
    }
    if (
      input.firstName.replace(/\s+/g, " ").trim().length <= 0 ||
      input.firstName <= 0
    ) {
      currentFirstNameError = true;
      // setError({
      //   emailError: error.emailError,
      //   passwordError: error.passwordError,
      //   firstNameError: true,
      //   lastNameError:error.lastNameError
      // });
    }
    if (
      input.lastName.replace(/\s+/g, " ").trim().length <= 0 ||
      input.lastName <= 0
    ) {
      currentLastnameError = true;
      // setError({
      //   emailError: error.emailError,
      //   passwordError: error.passwordError,
      //   firstNameError: error.lastNameError,
      //   lastNameError:true
      // });
    }
    if (!passwordPattern.test(input.password)) {
      currentPasswordError = true;
      // setError({
      //   emailError: error.emailError,
      //   passwordError: true,
      //   firstNameError: error.nameError,
      //   lastNameError:error.lastNameError
      // });
    }

    setError({
      emailError: currentEmailError,
      passwordError: currentPasswordError,
      firstNameError: currentFirstNameError,
      lastNameError: currentLastnameError,
    });

    const data = JSON.parse(localStorage.getItem("User"));
    const particularUser = data[input.email];
    if (particularUser) {
      alert("Already register!");
      navigate("/");
    } else if (
      passwordPattern.test(input.password) &&
      input.firstName.replace(/\s+/g, " ").trim().length > 0 &&
      emailPattern.test(input.email)
    ) {
      alert("Successful Signin!");
      setError({
        emailError: false,
        passwordError: false,
        firstNameError: false,
        lastNameError: false,
      });

      const data = JSON.parse(localStorage.getItem("User"));

      let Alluserinfo = {
        ...data,
        [input.email]: {
          email: input.email,
          password: input.password,
          firstName: input.firstName,
          lastName: input.lastName,
        },
      };

      localStorage.setItem("User", JSON.stringify(Alluserinfo));

      navigate("/");
      setInput({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
      });
    }
  }

  return (
    <Box className="container-signup">
      <Box className="left-container">
        <img src={LeftImage} alt="" />
      </Box>
      <Box className="right-container">
        <Box className="sigup-functionality">
          <Box className="login-text">Sign Up</Box>
          <Box className="upper-text">Create your account in a seconds</Box>
          <Box className="form">
            <form action="">
              <Box className="input">
                <TextField
                  // required
                  error={error.firstNameError}
                  className="input-password"
                  id="outlined-required"
                  label="First Name:"
                  size="small"
                  // diableripple
                  onChange={handleFirstName}
                  sx={{
                    input: {
                      height: "26px",
                      borderRadius: "10px",
                      color: "#818181",
                    },
                    color: "#818181",
                  }}
                />
                {error.firstNameError && (
                  <Box
                    style={{
                      color: "red",
                      marginTop: "-14px",
                      marginBottom: "10px",
                    }}
                  >
                    Enter correct firstname
                  </Box>
                )}
              </Box>
              <Box className="input">
                <TextField
                  // required
                  error={error.lastNameError}
                  className="input-password"
                  id="outlined-required"
                  label="Last Name:"
                  size="small"
                  // diableripple
                  sx={{
                    input: {
                      height: "26px",
                      borderRadius: "10px",
                      color: "#818181",
                    },
                    color: "#818181",
                  }}
                  onChange={handleLastName}
                />
              </Box>
              {error.lastNameError && (
                <Box
                  style={{
                    color: "red",
                    marginTop: "-14px",
                    marginBottom: "10px",
                  }}
                >
                  Enter correct lastname
                </Box>
              )}

              <Box className="input">
                <TextField
                  className="input-email"
                  // required
                  error={error.emailError}
                  id="outlined-required"
                  label="Email Address:"
                  size="small"
                  // diableripple
                  // disableElevation
                  sx={{
                    input: {
                      height: "26px",
                      borderRadius: "10px",
                      color: "#818181",
                    },
                    color: "#818181",
                  }}
                  onChange={handleEmail}
                />
              </Box>
              {error.emailError && (
                <Box
                  style={{
                    color: "red",
                    marginTop: "-14px",
                    marginBottom: "10px",
                  }}
                >
                  Enter correct email
                </Box>
              )}

              <Box className="input">
                <TextField
                  // required
                  error={error.passwordError}
                  className="input-password"
                  id="outlined-required"
                  label="Create Password:"
                  size="small"
                  // diableripple
                  sx={{
                    input: { height: "26px", color: "#818181" },
                    color: "#818181",
                  }}
                  onChange={handlePassword}
                />
              </Box>
              {error.passwordError && (
                <Box
                  style={{
                    color: "red",
                    marginTop: "-14px",
                    marginBottom: "10px",
                  }}
                >
                  Enter correct password
                </Box>
              )}

              <Box className="feature-container">
                <Box className="check-box">
                 <Checkbox  sx={{
            color: "#7754F6",
          '&.Mui-checked': {
            color: "#7754F6",
             },
             }} {...label} />
                 I agree to the terms and privacy policy
                </Box>
              </Box>
              <Button
                onClick={handleSignUp}
                // diableripple
                disableElevation
                sx={{
                  bgcolor: "#7754f6",
                  color: "#FFFFFF",
                  width: "25vw",
                  height: "45px",
                  marginTop: "-5px",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                className="sinup-button"
              >
                Create an account
              </Button>
            </form>
            <Box className="signin-link">
              <Box component={"span"}>
                Alredy a member? <Link to="/">Login</Link>{" "}
              </Box>
            </Box>
            <Box className="continue-with">
              <Box className="line">
                <br />
              </Box>

              <Box className="continue-text">Or continue with</Box>
              <Box className="line">
                <br />
              </Box>
            </Box>

            <Box className="third-party-signin">
              <Box className="inside-third-party-signin">
                <Box className="third-party-images">
                  <img src={google} alt="" />
                </Box>
                <Box className="third-party-images">
                  <img src={facebook} alt="" />
                </Box>
                <Box className="third-party-images">
                  <img src={instagram} alt="" />
                </Box>
                <Box className="third-party-images">
                  <img src={twitter} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
