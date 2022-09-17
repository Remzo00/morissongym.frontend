import styled from "styled-components";

export const Main = styled.div`
    margin: auto;
    background-color: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
`;

export const Wrapper = styled.div`
    display: flex;
`;
export const ImgWrapper = styled.div`
    display: block;
    width: 100%;
`;
export const Services = styled.div`
    display: flex;
    @media screen and (max-width: 1350px) {
        flex-direction: column;
        align-items: center;
    }
`;
export const TrainingImg = styled.img`
    width: 500px;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
    cursor: pointer;
    border-radius: 10px;
    @media screen and (max-width: 1350px) {
        width: 100%;
        margin: 2% 0%;
    }
`;
export const DrinksImg = styled.img`
    width: 500px;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 10;
    margin-left: 50px;
    cursor: pointer;
    border-radius: 10px;
    @media screen and (max-width: 1350px) {
        width: 100%;
        margin: 2% 0%;
    }
`;
export const Foodimg = styled.img`
    width: 500px;
    height: 100%;
    margin-top: 25px;
    margin-bottom: 0px;
    margin-left: 50px;
    cursor: pointer;
    border-radius: 10px;
    @media screen and (max-width: 1350px) {
        width: 100%;
        margin: 2% 0%;
    }
`;
export const Supplementsimg = styled.img`
    width: 500px;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 50px;
    cursor: pointer;
    border-radius: 10px;
    @media screen and (max-width: 1350px) {
        width: 100%;
        margin: 2% 0%;
    }
`;
export const Title = styled.p``;

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

export const Heading = styled.h2`
    padding-left: 10%;
    margin-bottom: 0;
    font-weight: 900;
    font-size: 20px;
`;
