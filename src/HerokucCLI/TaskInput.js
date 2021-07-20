import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const TaskInput = () => {
  const history = useHistory();
  const [text, setText] = useState();
  const addTask = async () => {
    const myTask = {
      name: text,
      done: false,
    };
    await axios
      .post("https://etohardex.herokuapp.com/api/")
      .then((res) => console.log(res));
    setText("");
    window.location.reload();
  };
  return (
    <Container>
      <Input
        placeholder="Enter your task"
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          addTask();
        }}
      ></Button>
    </Container>
  );
};

export default TaskInput;
const Button = styled.div`
  color: white;
  font-weight: bold;
  width: 150px;
  height: 50px;
  border-radius: 5px;
  background-color: #6964dd;
  margin-top: 20px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Input = styled.div`
  width: 500px;
  height: 70px;
  border-radius: 10px;
  border-width: 0;
  border: 0;
  text-decoration: none;
  background-color: lightblue;
  padding-left: 10px;
  font-size: 15px;
`;
const Container = styled.div`
  width: 100%;
  height: 91vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #6964dd;
`;
