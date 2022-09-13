import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import {
    Wrapper,
    Main,
    Services,
    ImgWrapper,
    HeadingWrapper,
    Heading,
    Dailyimg,
    WrapDailyImg,
} from "./daily.styled";
import supplements from "../../assets/images/supplements.png";
import training from "../../assets/images/training.png";
import drinks from "../../assets/images/drinks.png";
import food from "../../assets/images/food.png";

const Daily = () => {
    return (
        <Main>
            <Header />
            <Wrapper>
                <Navbar />
                <ImgWrapper>
                    <Services>
                        <HeadingWrapper>
                            <Heading>Training</Heading>
                            <WrapDailyImg>
                                <Dailyimg src={training} />
                            </WrapDailyImg>
                        </HeadingWrapper>
                        <HeadingWrapper>
                            <Heading>Suplements</Heading>
                            <WrapDailyImg>
                                <Dailyimg src={supplements} />
                            </WrapDailyImg>
                        </HeadingWrapper>
                    </Services>
                    <Services>
                        <HeadingWrapper>
                            <Heading>Drinks</Heading>
                            <WrapDailyImg marignBottom={50}>
                                <Dailyimg src={drinks} />
                            </WrapDailyImg>
                        </HeadingWrapper>
                        <HeadingWrapper>
                            <Heading>Food</Heading>
                            <WrapDailyImg marignBottom={50}>
                                <Dailyimg src={food} />
                            </WrapDailyImg>
                        </HeadingWrapper>
                    </Services>
                </ImgWrapper>
            </Wrapper>
        </Main>
    );
};

export default Daily;
