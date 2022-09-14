import { BackgroundImage } from "@mantine/core";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Header from "../../components/header/header";
import Navbar from "../../components/navbar";

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

const Home = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Navbar />
        <HomeContainer>
          <WrapCardContainer>
            <CardTitle>Activity</CardTitle>
            <CardContainer>
              <CardGymTime>
                <GymNow>
                  <CardP>In the gym:</CardP>
                  <h1>24</h1>
                  <ProgressCircle>
                    <CircularProgressbar
                      maxValue={50}
                      value={22}
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: `#7DCD16`,
                        trailColor: "#626262",
                      })}
                    />
                  </ProgressCircle>
                </GymNow>
                <GymNow>
                  <CardP>Average:</CardP>
                  <h1>24</h1>
                  <ProgressCircle>
                    <CircularProgressbar
                      maxValue={50}
                      value={42}
                      strokeWidth={10}
                      styles={buildStyles({
                        pathColor: `#7DCD16`,
                        trailColor: "#626262",
                      })}
                    />
                  </ProgressCircle>
                </GymNow>
              </CardGymTime>
            </CardContainer>
          </WrapCardContainer>

          <WrapCardContainer>
            <CardTitle>Overview</CardTitle>
            <CardContainer background={"rgba(50, 49, 49, 0.636)"}>
              <CardP>Tracking history:</CardP>
              <CardOverview>
                <DashContainer>
                  <Dash height={50}></Dash>

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
          <CardContainer>
            <CardTitle>Summary</CardTitle>
          </CardContainer>
          <CardContainer>
            <CardTitle>Chart</CardTitle>
          </CardContainer>
        </HomeContainer>
      </Wrapper>
    </>
  );
};

export default Home;
