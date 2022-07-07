import React from "react";
import Icons from "../../assets/icons";
import { Table } from "@mantine/core";
import { Th } from "./tableCoaches.styled";

const elements = [
    {
        status: <Icons.Checked />,
        contact: "065/123/233",
        startDate: "15/07/2021",
        endDate: "15/07/2021",
        edit: <Icons.Edit />,
        name: "Pera Peric",
      },
      {
        status: <Icons.Checked />,
        contact: "065/123/233",
        startDate: "15/07/2021",
        endDate: "15/07/2021",
        edit: <Icons.Edit />,
        name: "Neko Nekic",
      },
      {
        status: <Icons.Checked />,
        contact: "065/123/233",
        startDate: "15/07/2021",
        endDate: "15/07/2021",
        edit: <Icons.Edit />,
        name: "Marko Markovic",
      },
      {
        status: <Icons.Checked />,
        contact: "065/123/233",
        startDate: "15/07/2021",
        endDate: "15/07/2021",
        edit: <Icons.Edit />,
        name: "Trecko Treckovic",
      },
];

const TableCoaches = () => {
    const rows = elements.map((element) => (
        <tr key={element.name}>
            <td>{element.status}</td>
            <td>{element.name}</td>
            <td>{element.contact}</td>
            <td>{element.startDate}</td>
            <td>{element.endDate}</td>
            <td>{element.edit}</td>
        </tr>
    ))

    return(
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
      <tbody>{rows}</tbody>
    </Table>
    )
}

export default TableCoaches