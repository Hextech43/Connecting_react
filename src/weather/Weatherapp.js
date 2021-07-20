import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "antd";
import antd from "antd/dist/antd.css";
import axios from "axios";
const api = {
  key: "a8ed1e1b66df68faeade5a57fb149f0e",
  base: "https://api.openweathermap.org/data/2.5/",
};
const Weatherapp = () => {
  const [SearchBox, setSearchBox] = useState("");
  const [Fetchdata, setFetchdata] = useState("");

  const Search = async () => {
    const res = await axios(
      `${api.base}weather?q=${SearchBox}&units=metric&appid=${api.key}`
    );
    console.log(res.data);
    if (res) {
      return setFetchdata(res.data);
    }
  };
  const DateBuilder = (e) => {
    let month = [
      "January",
      "Februaury",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    let months = month[e.getMonth()];
    let days = day[e.getDay()];
    let date = e.getDate();
    let year = e.getFullYear();

    // console.log(months);
    // console.log(days);

    return `${days} ${date} ${months} ${year}`;
  };
  useEffect(() => {
    Search();
  }, []);

  return (
    <div>
      {Fetchdata ? (
        <>
          <Container>
            <Search1>
              <Input
                onKeyPress={Search}
                onChange={(e) => {
                  setSearchBox(e.target.value);
                }}
                value={SearchBox}
                placeholder="Search"
              />
            </Search1>
            <Date1>{DateBuilder(new Date())}</Date1>
            <Coun>
              {Fetchdata.name},{Fetchdata.sys.country}
            </Coun>
            <Degree>{Math.round(Fetchdata.main.temp)}'C</Degree>
            <Description>{Fetchdata.weather[0].description}</Description>
          </Container>
        </>
      ) : (
        <>
          <Container>
            <Search1>
              <Input
                onKeyPress={Search}
                onChange={(e) => {
                  setSearchBox(e.target.value);
                }}
                value={SearchBox}
                placeholder="Search"
              />
            </Search1>
            <Date1>{DateBuilder(new Date())}</Date1>
            <Coun>Default , null</Coun>
            <Degree>0'C</Degree>
            <Description>Description</Description>
          </Container>
        </>
      )}
    </div>
  );
};

export default Weatherapp;
const Description = styled.div`
  font-weight: bold;
  font-size: 40px;
  color: blue;
  margin: 10px;
`;
const Degree = styled.div`
  height: 200px;
  width: 400px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(3px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  font-weight: bold;
  font-size: 70px;
  color: white;
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Coun = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: white;
  margin: 10px;
`;
const Date1 = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: white;
  margin: 20px;
`;
const Search1 = styled.div`
  Input {
    display: flex;
    background-color: white;
    width: 300px;
    justify-content: center;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    align-items: center;
  }
`;

const Container = styled.main`
  height: 100vh;
  width: 100vw;
  // justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:before {
    content: "";
    background: url("images/darksky.jpg") center center / cover fixed no-repeat;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;
