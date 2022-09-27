import { Modal } from "@mantine/core";
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

//TODO
//Finish implementing value on input for startDate and endDate

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  customer: Customer;
};

const editMemberDialog = ({ opened, setOpened, customer }: Props) => {
  const [membersValues, setMembersValues] = useState(customer);

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
          <Text>First Name</Text>
          <Input
            onChange={(e) =>
              setMembersValues({ ...membersValues, firstName: e.target.value })
            }
            value={membersValues.firstName}
          />
          <Text>Last Name</Text>
          <Input
            onChange={(e) =>
              setMembersValues({ ...membersValues, lastName: e.target.value })
            }
            value={membersValues.lastName}
          />
          <Text>Contact</Text>
          <Input
            onChange={(e) =>
              setMembersValues({
                ...membersValues,
                phoneNumber: e.target.value,
              })
            }
            value={membersValues.phoneNumber}
          />
          <Text>Email</Text>
          <Input
            onChange={(e) =>
              setMembersValues({ ...membersValues, email: e.target.value })
            }
            value={membersValues.email}
          />
          <Text>Start Date</Text>
          <Input />
          <Text>End Date</Text>
          <Input />
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
