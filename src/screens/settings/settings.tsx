import React, { useContext } from "react";
import { useColorScheme } from "@mantine/hooks";

import {
  SettingElement,
  TitleSetting,
  Wrapper,
  WrapperSettings,
  SettingButton,
} from "./settings.styled";
import {
  ColorSchemeProvider,
  Select,
  useMantineColorScheme,
} from "@mantine/core";

const Settings = () => {
  return (
    <>
      <Wrapper>
        <TitleSetting>Settings</TitleSetting>
        <WrapperSettings>
          <SettingElement>
            <TitleSetting>Language</TitleSetting>
            <Select
              style={{ borderRadius: "10px", color: "white" }}
              variant="unstyled"
              placeholder="Chose your language"
              defaultValue={"english"}
              icon=""
              data={[
                { value: "english", label: "English" },
                { value: "serbian", label: "Serbian" },
                { value: "germany", label: "Germany" },
              ]}
              styles={() => ({
                item: {
                  backgroundColor: "grey",

                  // applies styles to selected item
                },
                dropdown: {
                  background: "none",
                  border: "none",
                },
                input: {
                  border: "1px solid #606060",
                  borderRadius: "10px",
                  color: "white",
                  fontSize: "15px",
                  padding: "20px",
                },
              })}
            />
          </SettingElement>
          <SettingButton>Button</SettingButton>
        </WrapperSettings>
      </Wrapper>
    </>
  );
};

export default Settings;
