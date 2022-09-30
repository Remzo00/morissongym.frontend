import {
  Container,
  RfidP,
  RfidScanner,
  RfidTitle,
  RfidWrapper,
} from "./rfid.styled";

import RfidModal from "../../components/RfidModal/rfidmodal";
import { useSetState } from "@mantine/hooks";
import { useState } from "react";

const Rfid = () => {
  const [show, setShow] = useState("none");
  return (
    <>
      <RfidModal show={show} />
      <Container show={show}>
        <RfidWrapper>
          <RfidTitle>Scan RFID</RfidTitle>
          <RfidScanner
            onClick={() => {
              setShow("flex");
            }}
          ></RfidScanner>

          <RfidP>Take user card near device to scan data...</RfidP>
        </RfidWrapper>
      </Container>
    </>
  );
};

export default Rfid;
