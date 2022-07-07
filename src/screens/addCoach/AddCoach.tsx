import {
    Button,
    Heading,
    HeadingWrapper,
    TableWrapper,
    Wrapper,
  } from "./AddCoach.styled";
import TableCoaches from "../../components/tableCoaches/tableCoaches";


const AddCoach = () => {
    return(
        <>
        <Wrapper>
        <HeadingWrapper>
          <Heading>Coaches list</Heading>
          <Button>Add Coach</Button>
        </HeadingWrapper>
        <TableWrapper>
          <TableCoaches/>
        </TableWrapper>
      </Wrapper>
        </>
    )
}

export default AddCoach