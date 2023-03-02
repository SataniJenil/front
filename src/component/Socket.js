import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Socket() {
  var W3CWebSocket = require("websocket").w3cwebsocket;

  var client = new W3CWebSocket("ws://localhost:9000/");

  client.addEventListener("open", (event) => {
    client.send("Hello Server!");
  });

  // Listen for messages
  client.addEventListener("message", (event) => {
    console.log("Message from server ", event.data);
  });

  return (
    <div>
      <Button className="d-block w-100 signbtn pointer" type="submit">
        Login
      </Button>
    </div>
  );
}

export default Socket;
