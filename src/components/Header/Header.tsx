import { BsBagCheck } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import { Dropdown } from "react-bootstrap";
import Cart from "../Cart/Cart";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <header className="d-flex py-3 px-4 justify-content-between gap-3">
      <BsBagCheck size={55} onClick={() => navigate("/")} />

      <input className="search-bar py-1 px-3" type="text" placeholder="Search your product" />

      <div className="d-flex gap-4 align-items-center">
        <div className="d-flex align-items-center m-0">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-account">
              <AiOutlineUser size={35} />{" "}
              <span className="fw-bold">{user.username ? user.username : "My account"}</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {!user.token ? (
                <>
                  <Dropdown.Item onClick={() => navigate("/login")}>Login</Dropdown.Item>
                  <Dropdown.Item onClick={() => navigate("/register")}>Sign up</Dropdown.Item>
                </>
              ) : (
                <>
                  <Dropdown.Item onClick={() => navigate("/profile")}>Edit profile</Dropdown.Item>
                  <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
                </>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <Cart />
      </div>
    </header>
  );
};

export default Header;
