import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  background-color: ${(props) => props.theme.colors.black};
  /* background-color: rgba(255, 255, 255, 0.03); */
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
`;

export const TableWrapper = styled.div`
  margin-top: 30px;
  border-radius: 15px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.03);
`;

// export const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
// `;

// export const TableTr = styled.tr`
//   /* background-color: rgba(255, 255, 255, 0.05); */
//   background-color: ${(props) => props.theme.colors.gray};
// `;

// export const TableTh = styled.th`
//   border: 1px solid #dddddd;
//   text-align: left;
//   padding: 8px;
//   font-size: 18px;
//   font-weight: 700;
// `;

// export const TableTd = styled.td`
//   border: 1px solid #dddddd;
//   background-color: rgba(255, 255, 255, 0.05);
//   text-align: left;
//   padding: 8px;
//   font-size: 18px;
//   font-weight: 700;
// `;
