import styled from "styled-components";

export const Main = styled.div`
  margin: auto;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

export const Wrapper = styled.div`
  display: flex;
`;
export const ImgWrapper = styled.div`
  display: block;
`;
export const Services = styled.div`
  display: flex;
`;
export const TrainingImg = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 30px;
  margin-bottom: 10;
  margin-left: 90px;
  cursor: pointer;
  border-radius: 10px;
`;
export const DrinksImg = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 30px;
  margin-bottom: 10;
  margin-left: 90px;
  cursor: pointer;
  border-radius: 10px;
`;
export const Foodimg = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 70px;
  cursor: pointer;
  border-radius: 10px;
`;
export const Supplementsimg = styled.img`
  width: 500px;
  height: 300px;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: 70px;
  cursor: pointer;
  border-radius: 10px;
`;
export const Title = styled.p``;
