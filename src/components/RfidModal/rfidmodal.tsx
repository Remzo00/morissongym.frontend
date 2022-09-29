import {
  Container,
  RfidModalWrapper,
  RfidInfo,
  RfidModalP,
  RfidModalSpan,
  RfidUserImageWrapper,
  RfidUserImage,
} from "./rfidModal.styled";
interface Props {
  show: string;
}
const RfidModal = ({ show }: Props) => {
  const HardCodedData = [
    {
      fullName: "Andrew Miller",
      contact: "+9012232403",
      StartDate: "6th July",
      EndDate: "6th August",
    },
  ];

  return (
    <Container show={show}>
      <RfidModalWrapper>
        <RfidUserImageWrapper>
          <RfidUserImage src="https://einstein-clients.imgix.net/4373/375287/original.jpg?sat=-100" />
        </RfidUserImageWrapper>
        {HardCodedData.map((user, index) => {
          return (
            <RfidInfo key={index}>
              <RfidModalP>
                <RfidModalSpan>Full Name: </RfidModalSpan> {user.fullName}
              </RfidModalP>
              <RfidModalP>
                <RfidModalSpan>Contact: </RfidModalSpan> {user.contact}
              </RfidModalP>
              <RfidModalP>
                <RfidModalSpan>Start Date: </RfidModalSpan>
                {user.StartDate}
              </RfidModalP>
              <RfidModalP>
                <RfidModalSpan>End Date: </RfidModalSpan>
                {user.EndDate}
              </RfidModalP>
            </RfidInfo>
          );
        })}
      </RfidModalWrapper>
    </Container>
  );
};

export default RfidModal;
