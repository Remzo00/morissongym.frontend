import React, { useEffect, useState } from "react";
import Icons from "../../assets/icons";
import { Button } from "@mantine/core";
import { Table, Td, Th, Tr, TrHead } from "./tableCoaches.styled";
import api from "../../api";
import { Coach } from "../../types/types";
import EditCoachDialog from "../EditCoachDialog/EditCoachDialog";
import { useTranslation } from "react-i18next";

const TableCoaches = () => {
  const { t } = useTranslation();

  const [data, setData] = useState<Coach[]>([]);
  const [id, setId] = useState(Number);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);

  const editCoachHandler = () => {
    setModal(true);
  };

  const updateCoach = () => {
    api.updateCoach({
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
      user: {
        id: 0,
        userName: "string",
        firstName: "string",
        lastName: "string",
        email: "user@example.com",
        roleId: 0,
        role: {
          id: 0,
          name: "string",
        },
        userCode: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      },
    });
  };

  useEffect(() => {
    api.getCoachs().then((res) => {
      setData(res.result);
    });
  }, []);

  const rows = data.map((coach, index) => (
    <Tr key={index}>
      <Td data-label="Status">
        <Icons.Checked />
      </Td>
      <Td data-label="Name">{coach.firstName}</Td>
      <Td data-label="Last Name">{coach.lastName}</Td>
      <Td data-label="Contact">{coach.phoneNumber}</Td>
      <Td data-label="Email">{coach.email}</Td>
      <Td data-label="Edit">
        <Button type="submit" onClick={editCoachHandler} />
        {modal && (
          <EditCoachDialog opened={modal} setOpened={setModal} coach={coach} />
        )}
      </Td>
    </Tr>
  ));

  return (
    <Table>
      <thead>
        <TrHead>
          <Th>{t("coaches.status")}</Th>
          <Th>{t("coaches.firstName")}</Th>
          <Th>{t("coaches.lastName")}</Th>
          <Th>{t("coaches.contact")}</Th>
          <Th>{t("coaches.email")}</Th>
          <Th>{t("coaches.edit")}</Th>
        </TrHead>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default TableCoaches;
