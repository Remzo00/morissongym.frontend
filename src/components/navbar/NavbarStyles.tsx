import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => {
    const icon = getRef("icon");
    return {
        link: {
            ...theme.fn.focusStyles(),
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            fontSize: theme.fontSizes.sm,
            color: theme.colors.dark[1],
            padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
            borderRadius: theme.radius.sm,
            fontWeight: 500,
            height: "8%",
            transition: "all ease-in-out 0.25s",

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
            color: "white",
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
            height: "100vh",
            width: 300,
            background: theme.colors.dark[7],
            border: 0,
        },
        section: {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
        },
    };
});
