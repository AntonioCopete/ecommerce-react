import { Dropdown } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="menu">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-menu">
          <FiMenu size={30} />
          <span>Todas las categorías</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => navigate("/login")}>Login</Dropdown.Item>
          <Dropdown.Item onClick={() => navigate("/register")}>Register</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Menu;
