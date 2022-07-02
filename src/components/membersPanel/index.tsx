import React from "react";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./index.styled";
import TableComp from "./table";

const MembersPanel = () => {
  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading>Members list</Heading>
          <Button>Add memberss</Button>
        </HeadingWrapper>
        <TableWrapper>
          <TableComp />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default MembersPanel;
