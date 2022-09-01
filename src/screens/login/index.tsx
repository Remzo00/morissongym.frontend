import React, { useState } from "react";
import { Login } from "../../types/types";
import { PasswordInput, TextInput, Title } from "@mantine/core";
import { Wrapper, LoginContainer, LoginInput, Button } from "./index.styled";
import api from "../../api";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [data, setData] = useState<Login>({ username: "", password: "" });

  const handleChange = (e: any) => {
    console.log(e.target.name);
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    api.getLogin(data).then((res) => {
      //token
      setData(res.result);
      console.log(res);
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
            Sign In
          </Title>
          <TextInput
            placeholder="User Name"
            label="User Name"
            name="username"
            value={data.username}
            onChange={handleChange}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          <PasswordInput
            placeholder="Password"
            label="Password"
            name="password"
            description="Password must include at least one letter, number and special character"
            value={data.password}
            onChange={handleChange}
            required
            style={{ paddingTop: 15 }}
            styles={{ label: { color: "white" } }}
          />
          <Link to="/">
            <Button type="submit" style={{ top: 25 }}>
              Sign in
            </Button>
          </Link>
        </LoginInput>
      </LoginContainer>
    </Wrapper>
  );
};

export default LoginPage;
