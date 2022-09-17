import React from "react";
import Header from "../../components/header/header";
import { NavbarSimple } from "../../components/navbar";
import AddCoach from "./AddCoach";
import { Main, Wrapper } from "./coach.styled";

const Coaches = () => {
    return (
        <Main>
            <Header />
            <Wrapper>
                <NavbarSimple />
                <AddCoach />
            </Wrapper>
        </Main>
    );
};

export default Coaches;
