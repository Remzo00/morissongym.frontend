import { Modal, TextInput } from "@mantine/core";
import React, { useState } from "react";
import api from "../../api";
import { Customer } from "../../types/types";
import {
  Main,
  Title,
  Wrapper,
  Text,
  Input,
  ButtonDiv,
  DeleteButton,
  ConfirmButton,
} from "./EditMemberDialog.style";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

//TODO
//Finish implementing value on input for startDate and endDate

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  customer: Customer;
};

const editMemberDialog = ({ opened, setOpened, customer }: Props) => {
  const { t } = useTranslation();

  const [membersValues, setMembersValues] = useState(customer);

  const EditMemberSchema = Yup.object().shape({
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

  const deleteMember = (id: number) => {
    api.deleteCoach(id);
  };

  const postData = () => {
    api.updateCustomer({
      id: membersValues.id,
      firstName: membersValues.firstName,
      lastName: membersValues.lastName,
      phoneNumber: membersValues.phoneNumber,
      email: membersValues.email,
      startDate: membersValues.startDate,
      endDate: membersValues.endDate,
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
        <Title>{t("editMembersButton.editMembersTitle")}</Title>
        <Wrapper>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
            }}
            validationSchema={EditMemberSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Text>{t("editMembersButton.firstName")}</Text>
                <Field name="firstName">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setMembersValues({
                            ...membersValues,
                            firstName: e.target.value,
                          })
                        }
                        value={membersValues.firstName}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editMembersButton.lastName")}</Text>
                <Field name="lastName">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setMembersValues({
                            ...membersValues,
                            lastName: e.target.value,
                          })
                        }
                        value={membersValues.lastName}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editMembersButton.contact")}</Text>
                <Field name="phoneNumber">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setMembersValues({
                            ...membersValues,
                            phoneNumber: e.target.value,
                          })
                        }
                        value={membersValues.phoneNumber}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editMembersButton.email")}</Text>
                <Field name="email">
                  {({ field, form: { touched, errors }, meta }: any) => (
                    <div>
                      <TextInput
                        type="text"
                        onChange={(e) =>
                          setMembersValues({
                            ...membersValues,
                            email: e.target.value,
                          })
                        }
                        value={membersValues.email}
                      />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
                <Text>{t("editMembersButton.startDate")}</Text>
                <Input />
                <Text>{t("editMembersButton.endDate")}</Text>
                <Input />
              </Form>
            )}
          </Formik>
        </Wrapper>
        <ButtonDiv>
          <DeleteButton onClick={() => deleteMember(membersValues.id)}>
            {t("editMembersButton.delete")}
          </DeleteButton>
          <ConfirmButton onClick={postData}>
            {t("editMembersButton.confirm")}
          </ConfirmButton>
        </ButtonDiv>
      </Modal>
    </Main>
  );
};

export default editMemberDialog;
