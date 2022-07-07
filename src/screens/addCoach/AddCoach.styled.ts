import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.black};
  margin-top: 150px;
  color: ${(props) => props.theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  padding: 25px;
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
  margin-top: 30px;
  border-radius: 15px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.03);
`;
