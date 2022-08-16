import React from "react";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import { Wrapper } from "./home.styled";

const Home = () => {
    return(
        <>
         <Header />
        <Wrapper>       
            <Navbar />
            HOME
        </Wrapper>           
        </>
    )
}

export default Home