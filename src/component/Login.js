import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // const options = {
    //   method: "GET",
    //   // url: "https://latest-stock-price.p.rapidapi.com/price",
    //   params: { Indices: "NIFTY 50" },
    //   headers: {
    //     "X-RapidAPI-Key": "c2558f69cdmshc896929dabd0853p1c0855jsndd033199a96e",
    //     "X-RapidAPI-Host": "latest-stock-price.p.rapidapi.com",
    //   },
    // };
    // axios
    //   .request(options)
    //   .then(function (response) {
    //     console.log(response.data, "response");
    //   })
    //   .catch(function (error) {
    //     console.error(error, "error");
    //   });

    // axios
    //   .get("https://3aaf-106-201-234-104.ngrok.io/donor/getAlldata")
    //   .then((res) => {
    //     console.log("res", res);
    //     setTimeout(() => {
    //       //   window.location.reload(true);
    //     }, 3000);
    // console.log("update", res);
    // });
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
            Login
          </Button>
        </div>
        <br />
      </Form>{" "}
    </div>
  );
};

export default Login;
