import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaTasks } from "react-icons/fa";
import axios from "axios";

const HeaderNav = () => {
  const [fetchData, setFetchData] = React.useState([]);

  const getData = async () => {
    const res = await axios.get("https://etohardex.herokuapp.com/api");
    if (res) {
      setFetchData(res.data);
      console.log(fetchData);
    }
  };
  React.useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Logo />
      <Wrapper>
        <Span>Home</Span>
        <Span>Add Task</Span>
        <Span>AIs</Span>
        <Span>AI Test</Span>
      </Wrapper>
      <Holder>
        <Icon />
        <span>{fetchData.length}</span>
      </Holder>
    </Container>
  );
};

export default HeaderNav;
const Holder = styled.div`
  color: white;*/
  height: 60px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-weight: bold;
    font-size: 20px
  }
`;

const Span = styled(Link)`
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
  color: white;
  margin: 0 20px;
  font-weight: bold;
  opacity: 0.7;
  text-transform: uppercase;
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: 1.2px;
  transition: all 350ms;
  &:hover {
    opacity: 1;
  }
`;

const Icon = styled(FaTasks)`
  margin: 0 20px;
  margin-top: 5px;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #191c3c;
`;
const Wrapper = styled(Link)`
  color: white;
  text-decoration: none;
  flex: 1;
  span {
    margin: 0 20px;
    font-weight: bold;
    opacity: 0.7;
    text-transform: uppercase;
    font-size: 12px;
    font-family: Poppins;
    letter-spacing: 1.2px;
    transition: all 350ms;
    &:hover {
      opacity: 1;
    }
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  background-color: white;
  margin: 0 30px;
`;
