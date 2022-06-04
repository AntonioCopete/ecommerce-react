import { Dropdown } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-cart">
          <AiOutlineShoppingCart size={35} />
          <span className="fw-bold">Cart</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item></Dropdown.Item>
          <Dropdown.Item></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Cart;
