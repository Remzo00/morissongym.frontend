import { createStyles, useMantineColorScheme } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  return {
    link: {
      ...theme.fn.focusStyles(),
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      // color: theme.colors.dark[1],
      color: isDark ? theme.colors.gray[7] : theme.colors.dark[1],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      height: "10%",
      transition: "all ease-in-out 0.25s",
      margin: "2% 0%",

      "&:hover": {
        backgroundColor: theme.colors.lime[9],
        color: theme.white,

        [`& .${icon}`]: {
          color: "white",
        },
      },
    },

    linkIcon: {
      ref: icon,
      // color: isDark ? theme.colors.white : theme.colors.dark[7],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors.lime[9],
        color: theme.white,
        [`& .${icon}`]: {
          color: "white",
        },
      },
    },
    label: {
      fontWeight: 700,
      fontSize: 17,
    },
    wrapper: {
      height: "auto",
      width: 360,
      background: isDark ? theme.colors.white_gray : theme.colors.dark[7],
      border: 0,
      position: "sticky",
      top: 0,
    },
    section: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
    },
  };
});
