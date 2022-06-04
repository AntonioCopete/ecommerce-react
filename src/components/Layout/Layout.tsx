import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <Outlet />
    </div>
  );
};
export default Layout;
