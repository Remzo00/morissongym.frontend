import styled from "styled-components";

export const Th = styled.th`
  padding: 30px 10px 10px 10px;
  border-bottom: 2px solid rgb(41, 41, 41);
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Tr = styled.tr`
  text-align: left;
`;

export const Td = styled.td`
  border-bottom: 10px solid #1a1b1e;
  padding: 6px 6px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.05);
  position: relative;
  @media (max-width: 700px) {
    display: block;
    text-align: right;
    &::after {
      content: attr(data-label);
      position: absolute;
      top: 0%;
      left: 5%;
      height: 100%;
      font-weight: bold;
      width: 100px;
      display: flex;
      align-items: center;
    }
  }
`;

export const TrHead = styled.tr`
  text-align: center;
`;

export const Table = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  font-size: 1em;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
`;
