import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import axios from "axios";
const Hello = () => {
  let history = useHistory();

  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      email: loginEmail,
      password,
    };
    console.log("payload", payload);
    axios
      .post("https://fcb2-106-201-234-104.in.ngrok.io/user/signup", payload)
      .then((res) => {
        setTimeout(() => {
          history.push("/reg");
          // window.location.reload(true);
        }, 3000);
        console.log("update", res);
      });
  };

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <div className="spacing">
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              value={loginEmail}
              placeholder="E-mail address"
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <br />
          <Button className="d-block w-100 signbtn pointer" type="submit">
            SIGN IN
          </Button>
        </div>
        <hr />
      </Form>{" "}
    </div>
  );
};

export default Hello;
