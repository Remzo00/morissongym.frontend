import React, { useState } from "react";
import { Modal, Button, Group, TextInput } from "@mantine/core";
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

const AddCoachDialog = ({ opened, setOpened }: Props) => {
  const [id, setId] = useState(Number);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

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
          <Text>First Name</Text>
          <Input onChange={(e) => setFirstName(e.target.value)} />
          <Text>Last Name</Text>
          <Input onChange={(e) => setLastName(e.target.value)} />
          <Text>Contact</Text>
          <Input onChange={(e) => setPhoneNumber(e.target.value)} />
          <Text>Email</Text>
          <Input onChange={(e) => setEmail(e.target.value)} />
        </Wrapper>
        <ButtonDiv>
          <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
          <ConfirmButton onClick={postData}>Next</ConfirmButton>
        </ButtonDiv>
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
