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

export const HomeContainer = styled.div<{isDark:boolean}>`
  width: fit-content;
  height: fit-content;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props=>props.isDark?"#e5e4e2":"black"};
  align-items: center;
  justify-content: center;
`;
export const WrapCardContainer = styled.div<Props>`
  display: flex;
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  flex-direction: column;
`;
export const CardContainer = styled.div<{isDark:boolean}>`
  position: relative;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 300px;
  margin: 20px 20px 0px 20px;
  background-color: ${(props) => props.isDark ? "gray" : "rgba(255, 255, 255, 0.11)"};
  opacity: .8;
  filter: alpha(opacity=50);
  transition: all 1s;
  -webkit-transition: all 1s;
  
`;
export const CardTitle = styled.h1<{isDark:boolean}>`
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 20px 0px 0px 30px;
  color: ${(props) => props.isDark ? "black" : "white"};
  opacity: .8;
  filter: alpha(opacity=50);
  transition: all 1s;
  -webkit-transition: all 1s;
`;
export const CardGymTime = styled.div<{isDark:boolean}>`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.isDark ? "#e5e4e2" : "black"};
  width: 100%;
  height: 100%;
  color: ${(props) => props.isDark ? "black" : "white"};
`;
export const GymNow = styled.div<{isDark:boolean}>`
  width: 49%;
  border-radius: 20px;
  background-color: ${(props) => props.isDark ? "gray" : "rgba(255, 255, 255, 0.11)"};
  // background-color: rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: .8;
  filter: alpha(opacity=50);
  transition: all 1s;
  -webkit-transition: all 1s;
`;

export const ProgressCircle = styled.div`
  width: 80px;
  height: 80px;
`;

export const CardP = styled.p<{isDark:boolean}>`
  font-size: large;
  margin: 0px;
  margin-left: 10px;
  margin-top: 20px;
  color: ${(props) => props.isDark ? "black" : "white"};
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
