import Navbar from "../navbar";
import Header from "../header/header";
interface LayoutInterface {
  children: React.ReactNode;
}
export default function LayoutNav(props: LayoutInterface) {
  return (
    <>
      <Header />
      <div style={{ display: "flex", margin: 0 }}>
        <Navbar />
        {props.children}
      </div>
    </>
  );
}
