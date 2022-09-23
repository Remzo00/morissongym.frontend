import { useStyles } from "./NavbarStyles";

interface NavbarLinkInterface {
    item: any;
    setActive: any;
    active: any;
}

export const NavbarItem = (props: NavbarLinkInterface) => {
    const { classes, cx } = useStyles();
    return (
        <a
            className={cx(classes.link, {
                [classes.linkActive]: props.item.label === props.active,
            })}
            href={props.item.link}
            key={props.item.label}
            onClick={(e): any => {
                props.setActive(props.item.label);
            }}
        >
            <props.item.icon className={classes.linkIcon} stroke={1.5} />
            <span className={classes.label}>{props.item.label}</span>
        </a>
    );
};
