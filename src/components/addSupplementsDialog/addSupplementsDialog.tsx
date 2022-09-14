import React from "react";
import { Modal, Button, Group } from "@mantine/core";
import {
  CancelButton,
  ConfirmButton,
  GroupBtn,
  Labels,
  Main,
  Text,
  Title,
} from "./addSupplementsDialog.styled";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const addSupplementsDialog = ({ opened, setOpened }: Props) => {
  const cancelHandle = () => {
    setOpened(false);
  };
  return (
    <Main>
      <Modal
        styles={{ modal: { backgroundColor: "black" } }}
        size={"25%"}
        opened={opened}
        onClose={cancelHandle}
      >
        <Title>Supplements</Title>
        <Labels>
          <Text>Protein</Text>
        </Labels>
        <Labels>
          {" "}
          <Text>Creatin</Text>
        </Labels>
        <Labels>
          {" "}
          <Text>BCAA</Text>
        </Labels>
        <Labels>
          {" "}
          <Text>Pre-Workout</Text>
        </Labels>
        <GroupBtn>
          <CancelButton>Cancel</CancelButton>
          <ConfirmButton>Next</ConfirmButton>
        </GroupBtn>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </Main>
  );
};

export default addSupplementsDialog;