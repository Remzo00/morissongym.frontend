import React from "react";
import Header from "../../components/header/header";
import { NavbarSimple } from "../../components/navbar";
import { Wrapper } from "./settings.styled";

const Settings = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <NavbarSimple />
                SETTINGS
            </Wrapper>
        </>
    );
};

export default Settings;
