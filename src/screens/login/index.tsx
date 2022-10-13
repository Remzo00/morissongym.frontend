import React, { useState } from "react";
import axios from "axios";
import { Login } from "../../types/types";
import { PasswordInput, TextInput, Title } from "@mantine/core";
import { Wrapper, LoginContainer, LoginInput, Button } from "./index.styled";
import api from "../../api";
import { useTranslation } from "react-i18next";

//TODO
//Finish handling JWT token
//send code in api request header

const LoginPage = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Login>({ username: "" });

  const setAuthToken = (token: string) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else delete axios.defaults.headers.common["Authorization"];
  };

  const handleChange = (e: any) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    api.postLogin(data).then((res) => {
      //get token from response
      const token = res.data.token;
      //set JWT token to local
      console.log("token", token);
      localStorage.setItem("token", token);
      //set token to axios common header
      setData(res.result);
      setAuthToken(token);
      console.log(res);
      //redirect user to home page
      // window.location.href = "/";
    });
  };

  return (
    <Wrapper>
      <LoginContainer>
        <LoginInput onSubmit={handleSubmit}>
          <Title
            order={1}
            align="center"
            style={{ marginBottom: 10, color: "white" }}
          >
            {t("login.signInTitle")}
          </Title>
          <TextInput
            placeholder="User Name"
            label={t("login.userName")}
            name="username"
            value={data.username}
            onChange={handleChange}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          {/* <PasswordInput
            placeholder="Password"
            label="Password"
            name="password"
            description="Password must include at least one letter, number and special character"
            value={data.password}
            onChange={handleChange}
            required
            style={{ paddingTop: 15 }}
            styles={{ label: { color: "white" } }}
          /> */}
          <Button type="submit" style={{ top: 25 }}>
            {t("login.signInBtn")}
          </Button>
        </LoginInput>
      </LoginContainer>
    </Wrapper>
  );
};

export default LoginPage;
