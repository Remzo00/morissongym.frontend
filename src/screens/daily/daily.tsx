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
            <TrainingImg src={training} />
            <Foodimg src={food} />
          </Services>
          <Services>
            <DrinksImg src={drinks} />
            <Supplementsimg src={supplements} />
          </Services>
        </ImgWrapper>
      </Wrapper>
    </Main>
  );
};

export default Daily;
