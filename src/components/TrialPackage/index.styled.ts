import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 50%;
  height: auto;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  border-radius: 5px;
  /* background-color: ${(props) => props.theme.colors.primary}; */
  background: #141414;
`;

export const CardWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 50vh;
  align-items: center;
  justify-content: space-evenly;
  /* flex-direction: column ; */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 5px;
  /* background-color: ${(props) => props.theme.colors.primary}; */
  background: rgba(0, 0, 0, 0.8);
`;

export const Cards = styled.div`
  width: 30%;
  height: 300px;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.white};
  /* background-color: ${(props) => props.theme.colors.black}; */
  background: rgba(255, 255, 255, 0.3);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  margin-left: 50px;
  margin-right: 50px;
  /* background-color: ${(props) => props.theme.colors.primary}; */
  background: #141414;
`;
export const CancelBtn = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 10px;
  margin-left: 3rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border: none;
  /* background-color: ${(props) => props.theme.colors.black}; */
  background: #ff000e;
`;
export const FinishBtn = styled.button`
  width: 150px;
  height: 35px;
  border-radius: 10px;
  margin-right: 3rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  border: none;
  /* background-color: ${(props) => props.theme.colors.black}; */
  background: #7dcd16;
`;

export const TrialTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
`;
