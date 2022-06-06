import { useEffect } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { products, increaseCart, decreaseCart } = useCart();

  // const decreaseQuantity = (productId: any) => {
  //   decreaseCart(productId);
  // };

  // const increaseQuantity = (productId: any) => {
  //   increaseCart(productId);
  // };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-cart">
          <AiOutlineShoppingCart size={35} />
          <span className="fw-bold">Cart</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {products?.map((product: any) => {
            return (
              <Dropdown.Item className="d-flex flex-column align-items-center" key={product._id}>
                <p>{product.title}</p>
                {/*
                <div className="d-flex justify-content-center gap-2 bg-light w-50">
                  <Button className="w-100" onClick={() => decreaseQuantity(product._id)}>
                    -
                  </Button>
                  <span className="w-100 text-center m-0 lh-0">{product.quantity}</span>
                  <Button className="w-100" onClick={() => increaseQuantity(product._id)}>
                    +
                  </Button>
                </div>
                */}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Cart;
