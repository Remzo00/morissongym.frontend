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
import { useTranslation } from "react-i18next";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddMemberDialog = ({ opened, setOpened }: Props) => {
  const { t } = useTranslation();

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
        size={"400px"}
        opened={opened}
        onClose={cancelHandler}
      >
        <Title>{t("addMembersModal.addMember")}</Title>
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
                <Text>{t("addMembersModal.firstName")}</Text>
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
                <Text>{t("addMembersModal.lastName")}</Text>
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
                <Text>{t("addMembersModal.email")}</Text>
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
                <Text>{t("addMembersModal.contact")}</Text>
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
                <Text>{t("addMembersModal.startDate")}</Text>
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
                <Text>{t("addMembersModal.endDate")}</Text>
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
                  <CancelButton onClick={cancelHandler}>
                    {t("addMembersModal.cancel")}
                  </CancelButton>
                  <ConfirmButton onClick={postData}>
                    {t("addMembersModal.confirm")}
                  </ConfirmButton>
                </ButtonDiv>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Modal>
    </Main>
  );
};

export default AddMemberDialog;
