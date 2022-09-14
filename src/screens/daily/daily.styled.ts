import styled from "styled-components";

interface Props{
    marignBottom?:number
}


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

`;

export const Services = styled.div`
    display: flex;
`;

export const WrapDailyImg = styled.div<Props>`
    background-color: white;
    height: 100%;
    width: 500px;
    margin-top: 20px;
    margin-bottom: ${props=>(`${props.marignBottom ? props.marignBottom : 20}px`)};
    margin-left: 50px;
    border-radius: 12px;
`

export const Dailyimg = styled.img`
    &:hover{
        opacity: 0.8;
        transition: opacity 0.2s;
    }
    width: 100%;
    height: 100.2%;
    cursor: pointer;
    border-radius: 10px;
`;
export const Title = styled.p`
`;

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
    letter-spacing: 1px;
`;
