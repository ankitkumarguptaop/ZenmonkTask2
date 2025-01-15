import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LeftImage from "../../images/left-image.png";
import TextField from "@mui/material/TextField";
import "./signin.css";
import facebook from "../../images/facebook.png";
import google from "../../images/google.png";
import instagram from "../../images/instagram.png";
import twitter from "../../images/twitter.png";
import { useState } from "react";
import{Link,useNavigate} from "react-router-dom"
// import Typography from '@mui/material/Typography';

const SignIn = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // const [emailError, setEmailError] = useState(false);
  // const [passwordError, setPasswordError] = useState(false);
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });

  function handleEmail(e) {
    setInput({
      email: e.target.value,
      password: input.password,
    });
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(e.target.value)) {
      setError({
        emailError: true,
        passwordError: error.passwordError,
      });
    } else {
      setError({
        emailError: false,
        passwordError: error.passwordError,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: false,
        passwordError: error.passwordError,
      });
    }
  }

  function handlePassword(e) {
    setInput({
      email: input.email,
      password: e.target.value,
    });
    var passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!passwordPattern.test(e.target.value)) {
      setError({
        emailError: error.emailError,
        passwordError: true,
      });
    } else {
      setError({
        emailError: error.emailError,
        passwordError: false,
      });
    }
    if (e.target.value.length <= 0) {
      setError({
        emailError: error.emailError,
        passwordError: false,
      });
    }
  }

  function handleSignin(e) {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/;
    let currentEmailError = false;
    let currentPasswordError = false;
    if (!emailPattern.test(input.email)) {
      currentEmailError = true;
    }
    if (!passwordPattern.test(input.password)) {
      currentPasswordError = true;
    }

    setError({
      emailError: currentEmailError,
      passwordError: currentPasswordError,
    });

    const data =JSON.parse(localStorage.getItem("User"));
    const particularUser = data[input.email];
    // console.log(data[input.email]);
     if(data &&  particularUser && particularUser.email=== input.email && particularUser.password===input.password){
      console.log("User Email id is :", input.email);
      console.log("User Password is :", input.password);
      alert(" User successfuly Sign in !");
      localStorage.setItem( "current-user" , JSON.stringify(
        particularUser.email))
      navigate("/home", { state: [input.email, input.password , particularUser.firstName] });
      setError({
        emailError: false,
        passwordError: false,
      });
      setInput({
        email: "",
        password: "",
      });
     }
     else{
      alert("Need to register first!")
     }
  }

  return (
    <Box className="container">
      <Box className="left-container">
        <img src={LeftImage} alt="" />
      </Box>
      <Box className="right-container">
        <Box className="sigin-functionality">
          <Box className="login-text">Login</Box>
          <Box className="upper-text">Login your account in a seconds</Box>
          <Box className="form">
            <form action="">
              <Box className="input">
                <TextField
                  error={error.emailError}
                  className="input-email"
                  // required
                  id="outlined-required"
                  label="Email Address"
                  size="small"
                  onChange={handleEmail}
                  sx={{
                    input: {
                      height: "26px",
                      borderRadius: "10px",
                      color: "#818181",
                      margin:"0px"
                    },
                    color: "#818181",
                  }}
                />
              </Box>
              { error.emailError && <Box style={{color:"red" , marginTop:"-14px" ,marginBottom:"13px"}}>Enter correct email</Box>}
              <Box className="input">
                <TextField
                  error={error.passwordError}
                  className="input-password"
                  id="outlined-required"
                  label="Password"
                  size="small"
                  onChange={handlePassword}
                  sx={{
                    input: {
                      height: "26px",
                      borderRadius: "10px",
                      color: "#818181",
                      margin:"0px",
                     
                    },
                    color: "#818181",
                  }}
                />
              </Box>
              { error.passwordError && <Box style={{color:"red" , marginTop:"-14px" ,marginBottom:"13px"}}>Enter correct password</Box>}
              <Box className="feature-container">
                <Box className="check-box">
                  <input id="check" type="checkbox" />
                  Keep me logged in
                </Box>
                <Box className="forgot-password">
                  <a href="./">Forget password?</a>
                </Box>
              </Box>
              <Button
                variant="text"
                onClick={handleSignin}
                sx={{
                  bgcolor: "#7754f6",
                  color: "#FFFFFF",
                  width: "25vw",
                  height: "45px",
                  marginTop: "10px",
                  borderRadius: "10px",
                  textTransform: "none",
                }}
                className="sinin-button"
              >
                {" "}
                Log in
              </Button>
            </form>
            <Box className="signup-link">
              <Box component={"span"}>
                Don't have an account? <Link to="/signup">Sign up</Link>{" "}
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

export default SignIn;
