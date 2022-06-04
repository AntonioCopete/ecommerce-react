import { Dropdown } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-menu">
          <FiMenu size={30} />
          <span>Todas las categorías</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/login">Login</Dropdown.Item>
          <Dropdown.Item href="/register">Register</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Menu;
