import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  min-height: 100vh;
  padding: 30px;
  width: 100%;
`;

export const TitleSetting = styled.div`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1px;
  color: white;
  margin-bottom: 15px;
`;

export const WrapperLanguage = styled.div`
  background-color: #1a1b1e;
  height: auto;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const SettingElement = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingButton = styled.button`
  width: 100px;
  height: 30px;
  border: 2px solid white;
  border-radius: 10px;
  color: white;
  background: none;
  transition: all 1s ease;
  display: block;
  margin-top: 10px;
  margin-left: auto;
  &:hover {
    background-color: white;
    color: black;
  }
`;

// Theme

export const WrapperTheme = styled.div`
  background-color: #1a1b1e;
  height: auto;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextTheme = styled.p`
  color: gray;
  @media (max-width: 700px) {
    display: none;
  }
`;
