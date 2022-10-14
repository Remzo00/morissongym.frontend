import React, { useState } from "react";
import AddMemberDialog from "../../components/AddMemberDialog/AddMemberDialog";
import { Table } from "../../components/tableMembers/table.styled";
import {
  Button,
  Heading,
  HeadingWrapper,
  TableWrapper,
  Wrapper,
} from "./AddMember.styled";
import { useTranslation } from "react-i18next";

const addMember = () => {
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
            {t("addMembersModal.addMembers")}
          </Button>
          {isOpen && <AddMemberDialog opened={isOpen} setOpened={setIsOpen} />}
        </HeadingWrapper>
        <TableWrapper>
          <Table />
        </TableWrapper>
      </Wrapper>
    </>
  );
};

export default addMember;
