import React, { useState } from "react";
import {
  ConfirmButton,
  RegisterContainer,
  Wrapper,
  RegisterInput,
  CancelButton,
  ButtonDiv,
} from "./register.styled";
import { TextInput, Title } from "@mantine/core";
import { Register } from "../../types/types";
import api from "../../api";

const RegisterForm = () => {
  const [data, setData] = useState<Register>({
    userCode: "",
    firstName: "",
    lastName: "",
    email: "",
    roleId: 0,
  });

  const handleChange = (e: any) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    api.postRegister(data).then((res) => {
      setData(res.result);
      console.log(res);
    });
  };
  return (
    <Wrapper>
      <RegisterContainer>
        <RegisterInput onSubmit={handleSubmit}>
          <Title
            order={1}
            align="center"
            style={{ marginBottom: 10, color: "white" }}
          >
            Registration
          </Title>
          <TextInput
            placeholder="User Code"
            label="User Code"
            name="userCode"
            onChange={handleChange}
            value={data.userCode}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          <TextInput
            placeholder="First Name"
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={data.firstName}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          <TextInput
            placeholder="Last Name"
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={data.lastName}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          <TextInput
            placeholder="Email"
            label="Email"
            name="email"
            onChange={handleChange}
            value={data.email}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          <TextInput
            placeholder="Role"
            label="Role"
            name="roleId"
            onChange={handleChange}
            value={data.roleId}
            required
            style={{ paddingTop: 15 }}
            styles={{
              label: { color: "white" },
            }}
          />
          <ButtonDiv>
            <ConfirmButton type="submit">Registar</ConfirmButton>
            <CancelButton>Cancel</CancelButton>
          </ButtonDiv>
        </RegisterInput>
      </RegisterContainer>
    </Wrapper>
  );
};

export default RegisterForm;
