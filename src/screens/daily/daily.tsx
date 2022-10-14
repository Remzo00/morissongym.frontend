import AddSupplementsDialog from "../../components/addSupplementsDialog/addSupplementsDialog";
import {
  Wrapper,
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
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Daily = () => {
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);
  return (
    <Wrapper>
      <AddSupplementsDialog opened={opened} setOpened={setOpened} />
      <ImgWrapper>
        <Services>
          <HeadingWrapper>
            <Heading>{t("daily.training")}</Heading>
            <WrapDailyImg>
              <Dailyimg src={training} />
            </WrapDailyImg>
          </HeadingWrapper>
          <HeadingWrapper>
            <Heading>{t("daily.supplements")}</Heading>
            <WrapDailyImg>
              <Dailyimg
                src={supplements}
                onClick={() => {
                  setOpened(true);
                }}
              />
            </WrapDailyImg>
          </HeadingWrapper>
        </Services>
        <Services>
          <HeadingWrapper>
            <Heading>{t("daily.drinks")}</Heading>
            <WrapDailyImg marignBottom={50}>
              <Dailyimg src={drinks} />
            </WrapDailyImg>
          </HeadingWrapper>
          <HeadingWrapper>
            <Heading>{t("daily.food")}</Heading>
            <WrapDailyImg marignBottom={50}>
              <Dailyimg src={food} />
            </WrapDailyImg>
          </HeadingWrapper>
        </Services>
      </ImgWrapper>
    </Wrapper>
  );
};

export default Daily;
