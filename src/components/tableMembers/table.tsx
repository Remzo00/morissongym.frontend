import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { Th, Tr, Td, Table, TrHead } from "./table.styled";
import Icons from "../../assets/icons";
import { Customer } from "../../types/types";
import api from "../../api";
import { useTranslation } from "react-i18next";

//TODO
//Include startDate and endDate

const TableComp = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<Customer[]>([]);
  const [id, setId] = useState(Number);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const updateCustomer = () => {
    api.updateCustomer({
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
      startDate,
      endDate,
    });
  };
  console.log(data);
  useEffect(() => {
    api.getCustomers().then((res) => {
      setData(res.result);
    });
  }, []);

  const rows = data.map((customer, index) => (
    <Tr key={index}>
      <Td>
        <Icons.Checked />
      </Td>
      <Td>{customer.firstName}</Td>
      <Td>{customer.lastName}</Td>
      <Td>{customer.phoneNumber}</Td>
      <Td>{customer.email}</Td>
      {/* <Td>{customer.startDate}</Td>
      <Td>{customer.endDate}</Td> */}
      <Td>
        <Button />
      </Td>
    </Tr>
  ));

  return (
    <Table>
      <thead>
        <TrHead>
          <Th>{t("members.status")}</Th>
          <Th>{t("members.firstName")}</Th>
          <Th>{t("members.lastName")}</Th>
          <Th>{t("members.contact")}</Th>
          <Th>{t("members.email")}</Th>
          <Th>{t("members.startDate")}</Th>
          <Th>{t("members.endDate")}</Th>
          <Th>{t("members.edit")}</Th>
        </TrHead>
        <tbody>{rows}</tbody>
      </thead>
    </Table>
  );
};

export default TableComp;
