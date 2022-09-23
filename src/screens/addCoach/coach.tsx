import React from "react";
import Header from "../../components/header/header";
import AddCoach from "./AddCoach";
import { Main } from "./coach.styled";

const Coaches = () => {
  return (
    <Main>
      <AddCoach />
    </Main>
  );
};

export default Coaches;
