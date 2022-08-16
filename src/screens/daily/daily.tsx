import React from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import { Wrapper } from "./daily.styled";

const Daily = () => {
    return(
        <>
            <Header />
            <Wrapper>
                <Navbar />
                DAILY
            </Wrapper>
        </>
    )
}

export default Daily