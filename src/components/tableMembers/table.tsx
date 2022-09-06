import React, { useState, useEffect } from "react";
import { Table, Button } from "@mantine/core";
import { Th } from "./table.styled";
import Icons from "../../assets/icons";
import { User } from "../../types/types";
import api from "../../api";

//TODO
//pass func rows in <tbody>

const TableComp = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    api.fetchUsers().then((res) => {
      setData(res.result);
    });
  }, []);

  const rows = data.map((user, index) => {
    <tr key={index}>
      <td>
        <Icons.Checked />
      </td>
      <td>{user.userName}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
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
          <Th>Name</Th>
          <Th>Contact</Th>
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
