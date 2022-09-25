import React, { useState } from "react";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./AddCoach.styled";
import TableCoaches from "../../components/tableCoaches/tableCoaches";
import AddCoachDialog from "../../components/AddCoachDialog/AddCoachDialog";

const AddCoach = () => {
  const [isOpen, setIsOpen] = useState(false);

  const addCoachHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading>Coaches list</Heading>
          <Button onClick={addCoachHandler}>Add Coach</Button>
          {isOpen && <AddCoachDialog opened={isOpen} setOpened={setIsOpen} />}
        </HeadingWrapper>
        <TableWrapper>
          <TableCoaches />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default AddCoach;
