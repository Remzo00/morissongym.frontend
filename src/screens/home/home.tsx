import Header from "../../components/header/header";
import { Wrapper } from "./home.styled";
import { NavbarSimple } from "../../components/navbar";

const Home = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <NavbarSimple />
                HOME
            </Wrapper>
        </>
    );
};

export default Home;
