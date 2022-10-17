import React, { useContext } from "react";
import { useColorScheme } from "@mantine/hooks";

import {
  SettingElement,
  TitleSetting,
  Wrapper,
  WrapperLanguage,
  SettingButton,
  WrapperTheme,
  TextTheme,
} from "./settings.styled";
import {
  Box,
  Center,
  Group,
  SegmentedControl,
  Select,
  useMantineColorScheme,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const { t } = useTranslation();

  return (
    <>
      <Wrapper>
        <TitleSetting>{t("settings.settings")}</TitleSetting>
        <WrapperLanguage>
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
        </WrapperLanguage>
        <WrapperTheme>
          <TitleSetting>Theme</TitleSetting>
          <TextTheme>
            Click or drag swither to change the theme of your GymPanel
            environment.
          </TextTheme>

          <Group position="center">
            <SegmentedControl
              size="md"
              color="lime"
              value={colorScheme}
              onChange={(value: "light" | "dark") => toggleColorScheme(value)}
              data={[
                {
                  value: "light",
                  label: (
                    <Center>
                      <Box ml={10}>Light</Box>
                    </Center>
                  ),
                },
                {
                  value: "dark",
                  label: (
                    <Center>
                      <Box ml={10}>Dark</Box>
                    </Center>
                  ),
                },
              ]}
            />
          </Group>
        </WrapperTheme>
      </Wrapper>
    </>
  );
};

export default Settings;
