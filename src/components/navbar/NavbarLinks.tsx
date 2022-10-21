import { useStyles } from "./NavbarStyles";

interface NavbarLinkInterface {
  item: any;
  setActive: any;
  active: any;
}

export const NavbarItem = (props: NavbarLinkInterface) => {
  const { classes, cx } = useStyles();
  console.log(props.item.label);
  let pathName = window.location.pathname.toUpperCase().slice(1);

  return (
    <a
      className={cx(classes.link, {
        [classes.linkActive]:
          props.item.label === pathName ||
          (props.item.label === "HOME" && pathName === ""),
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
