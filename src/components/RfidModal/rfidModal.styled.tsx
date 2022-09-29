import styled from "styled-components";

interface Props {
  show: string;
}
export const Container = styled.div<Props>`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: ${(props) => `${props.show}`};
  align-items: center;
  justify-content: center;
`;

export const RfidModalWrapper = styled.div`
  color: grey;
  width: 260px;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;
export const RfidUserImageWrapper = styled.div`
  width: 100%;
  height: 260px;
  background-color: #333333;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 50px;
`;
export const RfidUserImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
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

export const RfidModalP = styled.p`
  color: white;
  font-size: larger;
  text-align: center;
  margin: 10px;
  font-size: 17px;
`;

export const RfidInfo = styled.div``;

export const RfidModalSpan = styled.span`
  color: grey;
`;
