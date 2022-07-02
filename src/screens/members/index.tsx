import React from "react";
import MembersPanel from "../../components/membersPanel";
import Navbar from "../../components/navbar";
import { Wrapper } from "./index.styled";

const Members = () => {
  return (
    <Wrapper>
      <Navbar />
      <MembersPanel />
    </Wrapper>
  );
};

export default Members;