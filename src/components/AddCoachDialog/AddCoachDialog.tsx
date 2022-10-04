import React, { useState } from "react";
import { Modal, Button, Group, TextInput } from "@mantine/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Main,
  Wrapper,
  Title,
  Input,
  Text,
  CancelButton,
  ConfirmButton,
  ButtonDiv,
} from "./AddCoachDialog.styled";
import api from "../../api";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

// const MyInput = ({ field, form, ...props }) => {
//   return <input {...field} {...props} />;
// };

const AddCoachDialog = ({ opened, setOpened }: Props) => {
  const [id, setId] = useState(Number);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const AddCoachSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const postData = () => {
    api.addCoach({
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
      user: {
        id: 0,
        userName: "string",
        firstName: "string",
        lastName: "string",
        email: "user@example.com",
        roleId: 0,
        role: {
          id: 0,
          name: "string",
        },
        userCode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    });
  };
  const cancelHandler = () => {
    setOpened(false);
  };
  return (
    <Main>
      <Modal
        styles={{ modal: { backgroundColor: "#1A1A1A" } }}
        size={"40%"}
        opened={opened}
        onClose={cancelHandler}
      >
        <Title>Add Coach</Title>
        <Wrapper>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={AddCoachSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Text>First Name</Text>
                <Field name="firstName">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setFirstName(e.target.value)}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>Last Name</Text>
                <Field name="lastName">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => setLastName(e.target.value)}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>Email</Text>
                <Field name="email">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setEmail(e.target.value)}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>Contact</Text>
                <Field name="phoneNumber">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <ButtonDiv>
                  <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
                  <ConfirmButton type="submit" onClick={postData}>
                    Next
                  </ConfirmButton>
                </ButtonDiv>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Modal>
      <Group position="center">
        <Button onClick={cancelHandler} style={{ background: "#7DCD16" }}>
          Add Coach
        </Button>
      </Group>
    </Main>
  );
};

export default AddCoachDialog;
