import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = (props) => {
  useEffect(()=>{

  },[])
  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  } else {
    return props.children;
  }
};

export default PublicRoute;
