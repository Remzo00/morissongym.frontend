import React, { useState } from "react";
import { Modal, Button, Group } from '@mantine/core';
import { Main,
  Header,Text,ParentDiv,
  LeftDiv,RightDiv,Input,
  ParrentBtn,AddMemberButton,
  TextBtn, CancelButton } from "./AddMemberDialog.styled";


const AddMemberDialog = () => {
    const [opened, setOpened] = useState(false);

    return(
    <Main>           
        <Modal
          opened={opened}
          onClose={() => setOpened(false)}
        >     
          <Header>
              <Text>Add Member</Text>
          </Header>
          <ParentDiv>
          <LeftDiv>
            <Input placeholder="First and Last name" />
            <Input placeholder="Start Date" />
            <Input placeholder="End Date" />
          </LeftDiv>
          <RightDiv>
            <Input placeholder="E-mail" />
            <Input placeholder="Phone Number" />            
          </RightDiv>
          </ParentDiv>
          <ParrentBtn>
            <AddMemberButton><TextBtn>Add Member</TextBtn></AddMemberButton>
            <CancelButton><TextBtn>Cancel</TextBtn></CancelButton>
          </ParrentBtn> 
        </Modal>      
        
        <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </Main>
    )
}

export default AddMemberDialog