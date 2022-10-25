import { useEffect, useState } from "react";
import { Burger, Navbar, useMantineColorScheme } from "@mantine/core";
import { useStyles } from "./NavbarStyles";
import { data } from "./NavbarData";
import { NavbarItem } from "./NavbarLinks";

export function NavbarSimple() {
  const { classes } = useStyles();

  const [active, setActive] = useState("HOME");

  const [toggle, setToggle] = useState(true);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });
  const links = data.map((item) => (
    <NavbarItem setActive={setActive} active={active} item={item} />
  ));

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    if (screenSize.dynamicWidth < 900) {
      setToggle(false);
    } else {
      setToggle(true);
    }
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);
  useEffect(() => {
    localStorage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);

  useEffect(() => {
    localStorage.setItem("activeItem", active);
  }, [active]);
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  return (
    <>
      {screenSize.dynamicWidth < 900 ? (
        <Burger
          style={{ position: "absolute", top: 20 }}
          opened={toggle}
          onClick={() => setToggle(!toggle)}
          color={"white"}
          size={32}
        />
      ) : (
        ""
      )}
      {toggle ? (
        <Navbar className={classes.wrapper}>
          <div
            style={{
              height: 700,
              position: "sticky",
              top: 0,
            }}
          >
            <Navbar.Section grow className={classes.section}>
              {links}
            </Navbar.Section>
          </div>
        </Navbar>
      ) : (
        ""
      )}
    </>
  );
}
