import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

import {
  CardContainer,
  Wrapper,
  HomeContainer,
  CardTitle,
  CardGymTime,
  GymNow,
  ProgressCircle,
  CardP,
  CardOverview,
  WrapCardContainer,
  DashContainer,
  Dash,
  DashText,
} from "./home.styled";
import { useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Rainfall",
        fill: false,
        lineTension: 0.5,
        borderColor: "#46730C",
        borderWidth: 2,
        pointRadius: 0,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <HomeContainer isDark={isDark}>
      <WrapCardContainer>
        <CardTitle isDark={isDark}>{t("home.activity")}</CardTitle>
        <CardContainer isDark={isDark}>
          <CardGymTime isDark={isDark}>
            <GymNow isDark={isDark}>
              <CardP isDark={isDark}>{t("home.inTheGym")}</CardP>
              <h1>24</h1>
              <ProgressCircle>
                <CircularProgressbar
                  maxValue={100}
                  value={22}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: `#7DCD16`,
                    trailColor: "#62626265",
                  })}
                />
              </ProgressCircle>
            </GymNow>
            <GymNow isDark={isDark}>
              <CardP isDark={isDark}>{t("home.average")}:</CardP>
              <h1>24</h1>
              <ProgressCircle>
                <CircularProgressbar
                  maxValue={50}
                  value={42}
                  strokeWidth={10}
                  styles={buildStyles({
                    pathColor: `#7DCD16`,
                    trailColor: "#62626265",
                  })}
                />
              </ProgressCircle>
            </GymNow>
          </CardGymTime>
        </CardContainer>
      </WrapCardContainer>

      <WrapCardContainer>
        <CardTitle isDark={isDark}>{t("home.overview")}</CardTitle>
        <CardContainer isDark={isDark}>
          <CardP isDark={isDark}>{t("home.trackingHistory")}:</CardP>
          <CardOverview>
            <DashContainer>
              <Dash height={70}></Dash>

              <DashText>{t("home.mon")}</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={30}></Dash>
              <DashText>{t("home.tue")}</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={50}></Dash>

              <DashText>{t("home.wed")}</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={50}></Dash>
              <DashText>{t("home.thu")}</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={20}></Dash>
              <DashText>{t("home.fri")}</DashText>
            </DashContainer>
            <DashContainer>
              <Dash background="#8aff42" height={100}></Dash>
              <DashText>Sat</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={50}></Dash>
              <DashText>Sun</DashText>
            </DashContainer>
          </CardOverview>
        </CardContainer>
      </WrapCardContainer>
      <WrapCardContainer marginBottom={30}>
        <CardTitle isDark={isDark}>{t("home.summary")}</CardTitle>
        <CardContainer isDark={isDark}>
          <CardP isDark={isDark}>{t("home.newClients")}:</CardP>
          <CardOverview>
            <Line
              data={state}
              options={{
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      borderDash: [10],
                      color: "rgba(255, 255, 255, 0.1);",
                    },
                    ticks: {
                      stepSize: 8,
                    },
                  },
                },
              }}
            />
          </CardOverview>
        </CardContainer>
      </WrapCardContainer>
      <WrapCardContainer marginBottom={30}>
        <CardTitle isDark={isDark}>{t("home.chart")}</CardTitle>
        <CardContainer isDark={isDark}>
          <CardP isDark={isDark}>{t("home.trackingHistory")}:</CardP>
          <CardOverview>
            <DashContainer>
              <DashText>{t("home.mon")}</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>{t("home.tue")}</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>{t("home.wed")}</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>{t("home.thu")}</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>{t("home.fri")}</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>{t("home.sat")}</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>{t("home.sun")}</DashText>
            </DashContainer>
          </CardOverview>
        </CardContainer>
      </WrapCardContainer>
    </HomeContainer>
  );
};

export default Home;
