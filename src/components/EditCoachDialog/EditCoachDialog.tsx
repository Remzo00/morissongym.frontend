import React, { useState } from "react";
import { Modal, TextInput } from "@mantine/core";
import {
  Main,
  Wrapper,
  Title,
  Input,
  Text,
  DeleteButton,
  ConfirmButton,
  ButtonDiv,
} from "./EditCoachDialog.styled";
import api from "../../api";
import { Coach } from "../../types/types";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  coach: Coach;
};

const EditCoachDialog = ({ opened, setOpened, coach }: Props) => {
  const { t } = useTranslation();

  const [coachValues, setCoachValues] = useState(coach);

  const EditCoachSchema = Yup.object().shape({
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

  const deleteData = (id: number) => {
    api.deleteCoach(id);
  };

  const postData = () => {
    api.updateCoach({
      id: coachValues.id,
      firstName: coachValues.firstName,
      lastName: coachValues.lastName,
      phoneNumber: coachValues.phoneNumber,
      email: coachValues.email,
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
        <Title>{t("editCoachesButton.editCoaches")}</Title>
        <Wrapper>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={EditCoachSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Text>{t("editCoachesButton.firstName")}</Text>
                <Field name="firstName">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setCoachValues({
                            ...coachValues,
                            firstName: e.target.value,
                          })
                        }
                        value={coachValues.firstName}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editCoachesButton.lastName")}</Text>
                <Field name="lastName">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setCoachValues({
                            ...coachValues,
                            lastName: e.target.value,
                          })
                        }
                        value={coachValues.lastName}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editCoachesButton.contact")}</Text>
                <Field name="phoneNumber">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setCoachValues({
                            ...coachValues,
                            phoneNumber: e.target.value,
                          })
                        }
                        value={coachValues.phoneNumber}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editCoachesButton.email")}</Text>
                <Field name="email">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setCoachValues({
                            ...coachValues,
                            email: e.target.value,
                          })
                        }
                        value={coachValues.email}
                        {...field}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <ButtonDiv>
                  <DeleteButton onClick={() => deleteData(coachValues.id)}>
                    {t("editCoachesButton.delete")}
                  </DeleteButton>
                  <ConfirmButton onClick={postData}>
                    {t("editCoachesButton.confirm")}
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

export default EditCoachDialog;
