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

//TODO
//Finish implementing value on input for startDate and endDate

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  customer: Customer;
};

const editMemberDialog = ({ opened, setOpened, customer }: Props) => {
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
        <Title>Edit Member</Title>
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
                <Text>First Name</Text>
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
                <Text>Last Name</Text>
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
                <Text>Contact</Text>
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
                <Text>Email</Text>
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
                <Text>Start Date</Text>
                <Input />
                <Text>End Date</Text>
                <Input />
              </Form>
            )}
          </Formik>
        </Wrapper>
        <ButtonDiv>
          <DeleteButton onClick={() => deleteMember(membersValues.id)}>
            Delete
          </DeleteButton>
          <ConfirmButton onClick={postData}>Confirm</ConfirmButton>
        </ButtonDiv>
      </Modal>
    </Main>
  );
};

export default editMemberDialog;
