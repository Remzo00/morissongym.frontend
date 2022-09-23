import React, { useState } from "react";
import { Modal } from "@mantine/core";
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

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  coach: Coach;
};

const EditCoachDialog = ({ opened, setOpened, coach }: Props) => {
  const [coachValues, setCoachValues] = useState(coach);

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
        <Title>Edit Coach</Title>
        <Wrapper>
          <Text>First Name</Text>
          <Input
            onChange={(e) =>
              setCoachValues({ ...coachValues, firstName: e.target.value })
            }
            value={coachValues.firstName}
          />
          <Text>Last Name</Text>
          <Input
            onChange={(e) =>
              setCoachValues({ ...coachValues, lastName: e.target.value })
            }
            value={coachValues.lastName}
          />
          <Text>Contact</Text>
          <Input
            onChange={(e) =>
              setCoachValues({ ...coachValues, phoneNumber: e.target.value })
            }
            value={coachValues.phoneNumber}
          />
          <Text>Email</Text>
          <Input
            onChange={(e) =>
              setCoachValues({ ...coachValues, email: e.target.value })
            }
            value={coachValues.email}
          />
        </Wrapper>
        <ButtonDiv>
          <DeleteButton onClick={() => deleteData(coachValues.id)}>
            Delete
          </DeleteButton>
          <ConfirmButton onClick={postData}>Next</ConfirmButton>
        </ButtonDiv>
      </Modal>
    </Main>
  );
};

export default EditCoachDialog;
