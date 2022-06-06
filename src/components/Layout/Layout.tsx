import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.scss";

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Menu />
      <main className="main-container">
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
