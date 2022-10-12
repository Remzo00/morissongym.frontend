import styled from "styled-components";

interface Props {
  marignBottom?: number;
}

export const Wrapper = styled.div`
  padding-top: 20px;
  background-color: black;
  color: white;
  display: flex;
  width: 100%;
`;
export const ImgWrapper = styled.div`
  display: block;
`;

export const Services = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Heading = styled.h2`
  padding-left: 10%;
  margin-bottom: 0;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: 700px) {
    font-size: smaller;
  }
`;

export const WrapDailyImg = styled.div<Props>`
  background-color: white;
  height: 100%;
  width: 500px;
  margin-top: 20px;
  margin-bottom: ${(props) =>
    `${props.marignBottom ? props.marignBottom : 20}px`};
  margin-left: 50px;
  border-radius: 12px;
  @media (max-width: 700px) {
    width: 80%;
    height: 80%;
  }
`;

export const Dailyimg = styled.img`
  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s;
  }
  width: 100%;
  height: 100.2%;
  cursor: pointer;
  border-radius: 10px;
`;
export const Title = styled.p``;

export const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;
