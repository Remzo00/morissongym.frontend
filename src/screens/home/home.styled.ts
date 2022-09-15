import styled from "styled-components";

interface Props {
  background?: string;
  height?: number;
  marginBottom?: number;
}
export const Wrapper = styled.div`
  display: flex;
  left: 376px;
  top: 128px;
  border-radius: 0px;
`;

export const HomeContainer = styled.div`
  width: fit-content;
  height: fit-content;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: black;
  align-items: center;
  justify-content: center;
`;
export const WrapCardContainer = styled.div<Props>`
  display: flex;
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  flex-direction: column;
`;
export const CardContainer = styled.div<Props>`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 300px;
  margin: 20px 20px 0px 20px;
  background: ${(props) => props.background && props.background};
`;
export const CardTitle = styled.h1`
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 20px 0px 0px 30px;
`;
export const CardGymTime = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;
export const GymNow = styled.div`
  color: white;
  width: 49%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProgressCircle = styled.div`
  width: 80px;
  height: 80px;
`;

export const CardP = styled.p`
  font-size: large;
  color: white;
  margin: 0px;
  margin-left: 10px;
  margin-top: 20px;
`;

export const CardOverview = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  margin: auto;
  align-items: flex-end;
`;

export const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
  height: 100%;
`;

export const Dash = styled.div<Props>`
  width: 100%;
  height: ${(props) => `${props.height}%`};

  background: ${(props) =>
    props.background ? props.background : "rgba(126, 205, 22, 0.215)"};
  border-radius: 10px 10px 0px 0px;
`;

export const DashText = styled.p`
  color: white;
`;
export const DashboardImgStyled = styled.img`
  width: 100%;
  height: 40%;
`;
