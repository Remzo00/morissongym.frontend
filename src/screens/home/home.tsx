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

const Home: React.FC = () => {
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
        <CardTitle isDark={isDark}>Activity</CardTitle>
        <CardContainer isDark={isDark}>
          <CardGymTime isDark={isDark}>
            <GymNow isDark={isDark}>
              <CardP isDark={isDark}>In the gym:</CardP>
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
              <CardP isDark={isDark}>Average:</CardP>
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
        <CardTitle isDark={isDark}>Overview</CardTitle>
        <CardContainer isDark={isDark}>
          <CardP isDark={isDark}>Tracking history:</CardP>
          <CardOverview>
            <DashContainer>
              <Dash height={70}></Dash>

              <DashText>Mon</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={30}></Dash>
              <DashText>Tue</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={50}></Dash>

              <DashText>Wen</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={50}></Dash>
              <DashText>Thu</DashText>
            </DashContainer>
            <DashContainer>
              <Dash height={20}></Dash>
              <DashText>Fri</DashText>
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
        <CardTitle isDark={isDark}>Summary</CardTitle>
        <CardContainer isDark={isDark}>
          <CardP isDark={isDark}>New clients:</CardP>
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
        <CardTitle isDark={isDark}>Chart</CardTitle>
        <CardContainer isDark={isDark}>
          <CardP isDark={isDark}>Tracking history:</CardP>
          <CardOverview>
            <DashContainer>
              <DashText>Mon</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>Tue</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>Wen</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>Thu</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>Fri</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>Sat</DashText>
            </DashContainer>
            <DashContainer>
              <DashText>Sun</DashText>
            </DashContainer>
          </CardOverview>
        </CardContainer>
      </WrapCardContainer>
    </HomeContainer>
  );
};

export default Home;
