import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

export const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.colors.white};
`;

export const Button = styled.button`
  width: 200px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.green};
  border-radius: 15px;
  font-weight: 700;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;

export const TableWrapper = styled.div`
  margin-top: 10px;
  border-radius: 15px;
  background-color: #1a1b1e;
`;
