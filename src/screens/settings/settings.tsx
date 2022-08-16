import React from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import { Wrapper } from "./settings.styled";

const Settings = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <Navbar />
                SETTINGS
            </Wrapper>
        </>
    )
}

export default Settings