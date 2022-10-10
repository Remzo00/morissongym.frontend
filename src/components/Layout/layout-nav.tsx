import { Outlet } from "react-router-dom";
import Header from "../header/header";
import { NavbarSimple } from "../navbar";

export default function LayoutNav() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", margin: 0 }}>
        <NavbarSimple />
        <Outlet />
      </div>
    </>
  );
}
