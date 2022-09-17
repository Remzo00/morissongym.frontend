import Header from "../../components/header/header";
import MembersPanel from "../../components/membersPanel";
import Navbar from "../../components/navbar";
import { Wrapper, Main } from "./index.styled";

const Members = () => {
  return (
    <Main>
      <Wrapper>
        <MembersPanel />
      </Wrapper>
    </Main>
  );
};

export default Members;
