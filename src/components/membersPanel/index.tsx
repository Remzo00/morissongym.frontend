import React, { useState } from "react";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./index.styled";
import TableComp from "../tableMembers/table";
import AddMemberDialog from "../AddMemberDialog/AddMemberDialog";
import { useTranslation } from "react-i18next";

const MembersPanel = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const addMemberHandler = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Wrapper>
        <HeadingWrapper>
          <Heading>{t("members.membersList")}</Heading>
          <Button onClick={addMemberHandler}>
            {t("addMembersModal.addMember")}
          </Button>
          {isOpen && <AddMemberDialog opened={isOpen} setOpened={setIsOpen} />}
        </HeadingWrapper>
        <TableWrapper>
          <TableComp />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default MembersPanel;
