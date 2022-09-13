import Header from "../../components/header/header";
import Navbar from "../../components/navbar";
import {
    Wrapper,
    Main,
    Services,
    TrainingImg,
    DrinksImg,
    Foodimg,
    Supplementsimg,
    ImgWrapper,
    HeadingWrapper,
    Heading,
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
                            <TrainingImg src={training} />
                        </HeadingWrapper>
                        <HeadingWrapper>
                            <Heading>Suplements</Heading>
                            <Supplementsimg src={supplements} />
                        </HeadingWrapper>
                    </Services>
                    <Services>
                        <HeadingWrapper>
                            <Heading>Drinks</Heading>
                            <DrinksImg src={drinks} />
                        </HeadingWrapper>
                        <HeadingWrapper>
                            <Heading>Food</Heading>
                            <Foodimg src={food} />
                        </HeadingWrapper>
                    </Services>
                </ImgWrapper>
            </Wrapper>
        </Main>
    );
};

export default Daily;
