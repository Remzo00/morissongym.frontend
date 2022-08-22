import React, { useEffect, useState } from "react";
import Icons from "../../assets/icons";
import { Button, Table } from "@mantine/core";
import { Th } from "./tableCoaches.styled";
import api from "../../api";
import { Coach } from "../../types/types";

const TableCoaches = () => {
  const [data, setData] = useState<Coach[]>([]);

  useEffect(() => {
    api.fetchCoachs().then((res) => {
      setData(res.result);
    });
  }, []);
  const rows = data.map((coach, index) => (
    <tr key={index}>
      <td>
        <Icons.Checked />
      </td>
      <td>{coach.firstName}</td>
      <td>{coach.lastName}</td>
      <td>{coach.phoneNumber}</td>
      <td>{coach.email}</td>
      <td>
        <Button />
      </td>
    </tr>
  ));

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
          <Th>Contact</Th>
          <Th>Email</Th>
          <Th>Edit</Th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default TableCoaches;
