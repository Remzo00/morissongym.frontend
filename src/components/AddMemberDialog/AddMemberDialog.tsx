import React, { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
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

  const postData = () => {
    api.addCustomer({
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
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
        <Title>Add Member</Title>
        <Wrapper>
          <Text>First Name</Text>
          <Input onChange={(e) => setFirstName(e.target.value)} />
          <Text>Last Name</Text>
          <Input onChange={(e) => setLastName(e.target.value)} />
          <Text>Contact</Text>
          <Input onChange={(e) => setPhoneNumber(e.target.value)} />
          <Text>Email</Text>
          <Input onChange={(e) => setEmail(e.target.value)} />
          <Text>Start Date</Text>
          <Input />
          <Text>End Date</Text>
          <Input />
        </Wrapper>
        <ButtonDiv>
          <CancelButton onClick={cancelHandler}>Cancel</CancelButton>
          <ConfirmButton onClick={postData}>Confirm</ConfirmButton>
        </ButtonDiv>
      </Modal>

      <Group position="center">
        <Button style={{ background: "#7DCD16" }}>Add Member</Button>
      </Group>
    </Main>
  );
};

export default AddMemberDialog;
