import Header from "../../components/header/header";
import MembersPanel from "../../components/membersPanel";
import { NavbarSimple } from "../../components/navbar";
import { Wrapper, Main } from "./index.styled";

const Members = () => {
    return (
        <Main>
            <Header />
            <Wrapper>
                <NavbarSimple />
                <MembersPanel />
            </Wrapper>
        </Main>
    );
};

export default Members;
