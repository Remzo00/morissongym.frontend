import React, { useState } from "react";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./AddCoach.styled";
import TableCoaches from "../../components/tableCoaches/tableCoaches";
import AddCoachDialog from "../../components/AddCoachDialog/AddCoachDialog";
import { useTranslation } from "react-i18next";

const AddCoach = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const addCoachHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading>{t("coaches.coachesList")}</Heading>
          <Button onClick={addCoachHandler}>
            {t("addCoachesModal.addCoaches")}
          </Button>
          {isOpen && <AddCoachDialog opened={isOpen} setOpened={setIsOpen} />}
        </HeadingWrapper>
        <TableWrapper>
          <TableCoaches />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default AddCoach;
