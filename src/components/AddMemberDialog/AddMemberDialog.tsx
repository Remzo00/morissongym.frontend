import React, { useState } from "react";
import { Modal, Button, Group, TextInput } from "@mantine/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  ButtonDiv,
  Input,
  Main,
  Wrapper,
  ConfirmButton,
  CancelButton,
  Text,
  Title,
} from "./AddMemberDialog.styled";
import api from "../../api";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddMemberDialog = ({ opened, setOpened }: Props) => {
  const [id, setId] = useState(Number);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const postData = () => {
    api.addCustomer({
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
      startDate,
      endDate,
    });
  };

  const AddMemberSchema = Yup.object().shape({
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
    startDate: Yup.string().required("Required"),
    endDate: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

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
        <Title>Add Member</Title>
        <Wrapper>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              startDate: "",
              endDate: "",
            }}
            validationSchema={AddMemberSchema}
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
                        placeholder="Email"
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
                        placeholder="Contact"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>Start Date</Text>
                <Field name="startDate">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        placeholder="End Date"
                        // onChange={(e) => setStartDate(e.target.value)}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>End Date</Text>
                <Field name="endDate">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        placeholder="End Date"
                        // onChange={(e) => setEndDate(e.target.value)}
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
                  <ConfirmButton onClick={postData}>Confirm</ConfirmButton>
                </ButtonDiv>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Modal>

      <Group position="center">
        <Button style={{ background: "#7DCD16" }}>Add Member</Button>
      </Group>
    </Main>
  );
};

export default AddMemberDialog;
