import React from "react";
import { Modal, Button, Group } from "@mantine/core";
import {
  CancelButton,
  ConfirmButton,
  GroupBtn,
  Labels,
  Main,
  Text,
  Title,
} from "./addSupplementsDialog.styled";
import { useTranslation } from "react-i18next";

type Props = {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddSupplementsDialog = ({ opened, setOpened }: Props) => {
  const { t } = useTranslation();

  const cancelHandle = () => {
    setOpened(false);
  };
  return (
    <Main>
      {/* Changed width(size) */}
      <Modal
        styles={{
          modal: {
            backgroundColor: "black",
            minWidth: "300px",
            margin: "20px",
          },
        }}
        opened={opened}
        onClose={cancelHandle}
      >
        <Title>{t("addSupplements.supplements")}</Title>
        <Labels>
          <Text>{t("addSupplements.protein")}</Text>
        </Labels>
        <Labels>
          {" "}
          <Text>{t("addSupplements.creatine")}</Text>
        </Labels>
        <Labels>
          {" "}
          <Text>{t("addSupplements.bcaa")}</Text>
        </Labels>
        <Labels>
          {" "}
          <Text>{t("addSupplements.preWorkout")}</Text>
        </Labels>
        <GroupBtn>
          <CancelButton>{t("addSupplements.cancel")}</CancelButton>
          <ConfirmButton>{t("addSupplements.next")}</ConfirmButton>
        </GroupBtn>
      </Modal>
    </Main>
  );
};

export default AddSupplementsDialog;
