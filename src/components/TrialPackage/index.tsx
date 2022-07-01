import React from "react";
import {
  Wrapper,
  CardWrapper,
  Cards,
  ButtonWrapper,
  CancelBtn,
  FinishBtn,
  Main,
  TrialTitle,
} from "./index.styled";

const TrialProgram = () => {
  return (
    <Main>
      <Wrapper>
        <TrialTitle>Choose Program</TrialTitle>
        <CardWrapper>
          <Cards>hghjbakjbsai</Cards>
          <Cards>hghjbakjbsai</Cards>
          <Cards>hghjbakjbsai</Cards>
        </CardWrapper>
        <ButtonWrapper>
          <CancelBtn>Cancel</CancelBtn>
          <FinishBtn>Finish</FinishBtn>
        </ButtonWrapper>
      </Wrapper>
    </Main>
  );
};

export default TrialProgram;
