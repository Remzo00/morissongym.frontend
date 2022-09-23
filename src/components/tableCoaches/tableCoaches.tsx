import React, { useEffect, useState } from "react";
import Icons from "../../assets/icons";
import { Button, Table } from "@mantine/core";
import { Th } from "./tableCoaches.styled";
import api from "../../api";
import { Coach } from "../../types/types";
import EditCoachDialog from "../EditCoachDialog/EditCoachDialog";

const TableCoaches = () => {
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
    <tr key={index}>
      <td>
        <Icons.Checked />
      </td>
      <td>{coach.firstName}</td>
      <td>{coach.lastName}</td>
      <td>{coach.phoneNumber}</td>
      <td>{coach.email}</td>
      <td>
        <Button type="submit" onClick={editCoachHandler} />
        {modal && (
          <EditCoachDialog opened={modal} setOpened={setModal} coach={coach} />
        )}
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
