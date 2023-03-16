import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let reg = /[a-z0-9]{5,10}/;
    if (reg.test(userName) && reg.test(userPassword)) {
      toast.success("Login Successfully");
      navigate("/stock-data");
    } else {
      toast.error("invalid UserName Or password");
    }
  };

  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="bg">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="UserName"
                name="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// let reg = /[a-z0-9]/;
//     if (reg.test(userName) && userName.length > 4) {
//       console.log("ok");
//     }
