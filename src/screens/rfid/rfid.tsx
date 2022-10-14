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
import { useTranslation } from "react-i18next";

const Rfid = () => {
  const { t } = useTranslation();
  const [show, setShow] = useState("none");
  return (
    <>
      <RfidModal show={show} />

      <Container show={show}>
        <RfidWrapper>
          <RfidTitle>{t("rfid.scanRfid")}</RfidTitle>
          <RfidScanner
            onClick={() => {
              setShow("flex");
            }}
          ></RfidScanner>

          <RfidP>{t("rfid.scanText")}</RfidP>
        </RfidWrapper>
      </Container>
    </>
  );
};

export default Rfid;
