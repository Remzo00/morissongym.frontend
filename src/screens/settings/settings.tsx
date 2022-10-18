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
import i18n from "../../locales/i18n";
import { LanguageContext } from "../../locales/LocaleContext";

//TODO
//Fix change language

const Settings = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { locale, setLocale } = useContext(LanguageContext);
  const { t } = useTranslation();

  const changeLocale = (l: any) => {
    const lang = l.target.value;
    console.log(lang);
    setLocale(lang);
    i18n.changeLanguage(lang);
  };

  // const changeLocale = (l: any) => {
  //   if (locale !== l) {
  //     i18n.changeLanguage(l);
  //   }
  // };

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
              // onClick={() => changeLocale("en")}
              onChange={changeLocale}
              value={locale}
              data={[
                { value: "en", label: "English" },
                { value: "sr", label: "Serbian" },
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
          <TitleSetting>{t("settings.theme")}</TitleSetting>
          <TextTheme>{t("settings.themeTxt")}</TextTheme>

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
                      <Box ml={10}>{t("settings.light")}</Box>
                    </Center>
                  ),
                },
                {
                  value: "dark",
                  label: (
                    <Center>
                      <Box ml={10}>{t("settings.dark")}</Box>
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
