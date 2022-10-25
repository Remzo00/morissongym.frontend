import styled from "styled-components";
interface Props {
  show: string;
}
export const Container = styled.div<Props>`
  background-color: black;
  width: 100%;
  min-height: 100vh;
  display: ${(props) => `${props.show === "none" ? "flex" : "none"}`};
  align-items: center;
  justify-content: center;
`;

export const RfidWrapper = styled.div`
  width: 260px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;
export const RfidTitle = styled.h1`
  font-size: 30px;
  font-weight: 200;
  color: white;
`;
export const RfidScanner = styled.div`
  width: 100%;
  height: 260px;
  margin: 70px 0px 70px 0px;
  background: linear-gradient(to right, #7dcd16 7px, transparent 7px) 0 0,
    linear-gradient(to right, #7dcd16 7px, transparent 7px) 0 100%,
    linear-gradient(to left, #7dcd16 7px, transparent 7px) 100% 0,
    linear-gradient(to left, #7dcd16 7px, transparent 7px) 100% 100%,
    linear-gradient(to bottom, #7dcd16 7px, transparent 7px) 0 0,
    linear-gradient(to bottom, #7dcd16 7px, transparent 7px) 100% 0,
    linear-gradient(to top, #7dcd16 7px, transparent 7px) 0 100%,
    linear-gradient(to top, #7dcd16 7px, transparent 7px) 100% 100%;

  background-repeat: no-repeat;

  background-size: 40px 40px;
`;

export const RfidP = styled.p`
  color: grey;
  font-size: larger;
  text-align: center;
`;
