import Icons from "../../assets/icons";
import { Wrapper, Text, Active } from "./index.styled";
import cx from 'classnames';

const Navbar = () => {

  return (
    <Wrapper>
      <Active to={"/home"}>
        <Text><Icons.Home /> Home</Text>
      </Active>
      <Active to={"/daily"}>
        <Text> <Icons.Daily /> Daily</Text>
      </Active>
      <Active to={"/members"}>             
        <Text> <Icons.Members /> Members</Text>
      </Active>
      <Active to={"/coachs"}>        
        <Text><Icons.Members/> Coach</Text>
      </Active>
      <Active to={"/settings"}>       
        <Text><Icons.Settings/> Settings</Text>
      </Active>
    </Wrapper>
  );
};

export default Navbar;
