import React, { useState } from "react";
import AddMemberDialog from "../../components/AddMemberDialog/AddMemberDialog";
import { Table } from "../../components/tableMembers/table.styled";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./AddMember.styled";

const addMember = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addMemberHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading>Members List</Heading>
          <Button onClick={addMemberHandler}>Add Member</Button>
          {isOpen && <AddMemberDialog opened={isOpen} setOpened={setIsOpen} />}
        </HeadingWrapper>
        <TableWrapper>
          <Table />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default addMember;
