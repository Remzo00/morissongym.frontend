import Header from "../header/header";
import { NavbarSimple } from "../navbar";
interface LayoutInterface {
    children: React.ReactNode;
}
export default function LayoutNav(props: LayoutInterface) {
    return (
        <>
            <Header />
            <div style={{ display: "flex", margin: 0 }}>
                <NavbarSimple />
                {props.children}
            </div>
        </>
    );
}
