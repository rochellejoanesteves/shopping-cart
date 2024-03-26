import SideBar from "../sideBar";
import "./layout.scss";

function Layout({ children }) {
  return (
    <div className="layoutContainer">
      <div className="children">{children}</div>
      <SideBar />
    </div>
  );
}

export default Layout;
