import React from "react";



const Home = () => {
 const user = localStorage.getItem("current-user")


  return (
    <div>
    <h2>{user}</h2>
    </div>
  );
};

export default Home;
