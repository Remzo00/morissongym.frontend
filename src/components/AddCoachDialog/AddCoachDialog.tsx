import React from "react";
import { Modal, Button, Group } from '@mantine/core';
import { Main, Wrapper, Title, Input, Text, CancelButton, ConfirmButton, ButtonDiv } from "./AddCoachDialog.styled";

type Props = {
    opened: boolean,
    setOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AddCoachDialog = ({opened, setOpened}: Props) => {
    const cancelHandler = () => {
        setOpened(false)
    }
    return(
        <Main>
            <Modal
             size={"40%"}
             opened={opened}
             onClose={cancelHandler}
            >
                <Title>Add Coach</Title>
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
                    <CancelButton >Cancel</CancelButton>
                    <ConfirmButton>Next</ConfirmButton>
                    </ButtonDiv>
            </Modal>
        <Group position="center">
            <Button  onClick={cancelHandler} style={{ background: "#7DCD16" }}>Add Coach</Button>
        </Group>
        </Main>
    )
}

export default AddCoachDialog