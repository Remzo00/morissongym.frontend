import React, { useState } from "react";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./index.styled";
import TableComp from "../tableMembers/table";
import AddMemberDialog from "../AddMemberDialog/AddMemberDialog";

const MembersPanel = () => {
  const [isOpen, setIsOpen] = useState(false)

  const addMemberHandler = () => {
    setIsOpen(true)
  }
  
  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading>Members list</Heading>
          <Button onClick={addMemberHandler}>Add members</Button>
          {isOpen && <AddMemberDialog opened={isOpen} setOpened={setIsOpen}/>}
        </HeadingWrapper>
        <TableWrapper>
          <TableComp />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default MembersPanel;
