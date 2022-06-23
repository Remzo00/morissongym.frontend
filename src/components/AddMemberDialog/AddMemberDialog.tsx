import React from "react";
import { Modal, Button, Group } from '@mantine/core';
import { ButtonDiv, Input, Main, Wrapper, ConfirmButton, CancelButton, Text, Title, } from "./AddMemberDialog.styled";


  type Props = {
    opened: boolean,
    setOpened:  React.Dispatch<React.SetStateAction<boolean>>
  }
  

const AddMemberDialog = ({opened, setOpened}:Props) => { 
    return(
     <Main>              
        <Modal
          size={"40%"}
          opened={opened}          
          onClose={() => setOpened(false)}          
        >
          <Title>Add Member</Title>
          <Wrapper>            
          <Text>Full Name</Text>
          <Input />
          <Text>Contact</Text>
          <Input /> 
          <Text>Start Date</Text>
          <Input />
          <Text>End Date</Text>
          <Input />         
         </Wrapper> 
         <ButtonDiv>
            <CancelButton>Cancel</CancelButton> 
            <ConfirmButton>Next</ConfirmButton>            
         </ButtonDiv>       
        </Modal>                   
        
      <Group position="center">
        <Button style={{background: "#7DCD16"}} onClick={() => setOpened}>Add Member</Button>
      </Group>
    </Main>
    )
}

export default AddMemberDialog