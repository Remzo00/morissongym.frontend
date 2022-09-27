import React, { useState, useEffect } from "react";
import { Button } from "@mantine/core";
import { Th, Tr, Td, Table, TrHead } from "./table.styled";
import Icons from "../../assets/icons";
import { Customer } from "../../types/types";
import api from "../../api";

//TODO
//Include startDate and endDate

const TableComp = () => {
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
          <Th>Status</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Contact</Th>
          <Th>Email</Th>
          <Th>Start Date</Th>
          <Th>End Date</Th>
          <Th>Edit</Th>
        </TrHead>
        <tbody>{rows}</tbody>
      </thead>
    </Table>
  );
};

export default TableComp;
