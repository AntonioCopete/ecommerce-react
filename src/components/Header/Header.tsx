import { BsBagCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import { Dropdown } from "react-bootstrap";
import Cart from "../Cart/Cart";
const Header = () => {
  return (
    <header className="d-flex py-3 px-4 justify-content-between gap-3">
      <BsBagCheck size={55} />

      <input className="search-bar py-1 px-3" type="text" placeholder="Search your product" />

      <div className="d-flex gap-4 align-items-center">
        <div className="d-flex align-items-center m-0">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-account">
              <AiOutlineUser size={35} /> <span className="fw-bold">My account</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/login">Login</Dropdown.Item>
              <Dropdown.Item href="/register">Sign up</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Cart />
      </div>
    </header>
  );
};

export default Header;
