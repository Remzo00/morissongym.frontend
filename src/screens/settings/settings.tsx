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
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <TitleSetting>{t("settings.settings")}</TitleSetting>
        <WrapperSettings>
          <SettingElement>
            <TitleSetting>{t("settings.language")}</TitleSetting>
            <Select
              style={{ borderRadius: "10px", color: "white" }}
              variant="unstyled"
              placeholder="Chose your language"
              defaultValue={"english"}
              icon=""
              data={[
                { value: "english", label: "English" },
                { value: "serbian", label: "Serbian" },
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
