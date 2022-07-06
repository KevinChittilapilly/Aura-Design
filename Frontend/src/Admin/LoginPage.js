import React, { useState } from "react";
import "./Admin.css";
import { Button, FormControl, Input } from "@mui/material";
import { adminDetails } from "../util/utils";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMsg,setShowErrorMsg] = useState(false);
  const navigate = useNavigate();

  const validateUser = () =>{
    if(userName === adminDetails[0].username && password===adminDetails[0].password) {
        sessionStorage.setItem('token',adminDetails[0].token);
        setTimeout(() => {
          navigate('home')
        }, 3000);
    }
    else{
       setShowErrorMsg(true) 
    }
  }
  return (
    <div className="outer-login-page">
      <div className="title">Welcome to Admin Page</div>

      <FormControl style={{ width: "70%" }}>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          placeholder="Username"
          style={{ marginBottom: "30px" }}
          required
          onChange={(e)=>{setUserName(e.target.value);setShowErrorMsg(false)}}
        />
        </FormControl>
        <FormControl style={{ width: "70%" }}>
        <Input
          id="my-pwd"
          aria-describedby="my-helper-text"
          type="Password"
          placeholder="Password"
          style={{ marginBottom: "30px" }}
          required
          onChange={(e)=>{setPassword(e.target.value); setShowErrorMsg(false)}}
        />
        <Button variant="contained" onClick={() => validateUser()}>
          Submit
        </Button>
        {showErrorMsg && <div className="error-msg">Invalid Username or password</div>}
      </FormControl>
    </div>
  );
};
export default LoginPage;
