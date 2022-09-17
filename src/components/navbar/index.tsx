import { useState } from "react";
import { Navbar } from "@mantine/core";
import { useStyles } from "./NavbarStyles";
import { data } from "./NavbarData";
import { NavbarItem } from "./NavbarLinks";

export function NavbarSimple() {
    const { classes } = useStyles();
    const [active, setActive] = useState("");

    const links = data.map((item) => (
        <NavbarItem setActive={setActive} active={active} item={item} />
    ));

    return (
        <Navbar p="lg" className={classes.wrapper}>
            <Navbar.Section grow className={classes.section}>
                {links}
            </Navbar.Section>
        </Navbar>
    );
}
