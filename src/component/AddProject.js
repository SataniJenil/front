/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProject = () => {
  const [form, setForm] = useState({
    userName: "",
    projectName: "",
    userEmail: "",
    phoneNumber: "",
  });

  //   useEffect(() => {
  //     handleSubmit();
  //   }, []);
  //   const { handleSubmit } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      userName: form.userName,
      projectName: form.projectName,
      userEmail: form.userEmail,
      phoneNumber: form.phoneNumber,
    };
    axios
      .post("https://fcb2-106-201-234-104.in.ngrok.io/project/addProject", data)
      .then((res) => {
        console.log("update", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const onUpdateField = (e) => {
    console.log("call");
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log("next", nextFormState);
    setForm(nextFormState);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            value={form.userName}
            name="userName"
            placeholder="Name"
            onChange={onUpdateField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="userEmail"
            value={form.userEmail}
            placeholder="Email"
            onChange={onUpdateField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            type="number"
            name="phoneNumber"
            value={form.phoneNumber}
            placeholder="Phone"
            onChange={onUpdateField}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            name="projectName"
            value={form.projectName}
            placeholder="Project Name"
            onChange={onUpdateField}
          />
        </Form.Group>
        <br />
        <Button variant="dark" type="submit">
          Start
        </Button>
      </Form>
    </>
  );
};

export default AddProject;
