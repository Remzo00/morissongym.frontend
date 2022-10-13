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
import { useTranslation } from "react-i18next";
const RegisterForm = () => {
  const { t } = useTranslation();
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
            {t("registar.registration")}
          </Title>
          <TextInput
            placeholder="User Code"
            label={t("registar.userCode")}
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
            label={t("registar.firstName")}
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
            label={t("registar.lastName")}
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
            label={t("registar.email")}
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
            label={t("registar.role")}
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
            <ConfirmButton type="submit">
              {t("registar.registarBtn")}
            </ConfirmButton>
            <CancelButton> {t("registar.cancel")}</CancelButton>
          </ButtonDiv>
        </RegisterInput>
      </RegisterContainer>
    </Wrapper>
  );
};

export default RegisterForm;
