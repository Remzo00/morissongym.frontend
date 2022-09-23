import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import { Th } from "./table.styled";
import Icons from "../../assets/icons";
import { Customer } from "../../types/types";
import api from "../../api";

//TODO
//pass func rows in <tbody>

const TableComp = () => {
  const [data, setData] = useState<Customer[]>([]);

  useEffect(() => {
    api.getCustomers().then((res) => {
      setData(res.result);
    });
  }, []);

  const rows = data.map((customer, index) => {
    <tr key={index}>
      <td>
        <Icons.Checked />
      </td>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.email}</td>
      <td>{customer.startDate}</td>
      <td>{customer.endDate}</td>
      <td>
        <Button />
      </td>
    </tr>;
  });

  return (
    <Table
      fontSize="lg"
      verticalSpacing="sm"
      style={{ color: "white" }}
      sx={(theme) => ({
        backgroundColor: theme.colors.black,
      })}
    >
      <thead>
        <tr>
          <Th>Status</Th>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Email</Th>
          <Th>Phone</Th>
          <Th>Start Date</Th>
          <Th>End Date</Th>
          <Th>Edit</Th>
        </tr>
      </thead>
      <tbody>{}</tbody>
    </Table>
  );
};

export default TableComp;
