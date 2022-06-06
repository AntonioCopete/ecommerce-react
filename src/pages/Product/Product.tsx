import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduct } from "../../api/api";
import { useCart } from "../../context/CartContext";
import "./Product.scss";

const Product = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>();
  const { name } = useParams();
  const { addProduct } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    if (name) {
      const productName = name.replaceAll("-", " ");

      const res = await fetchProduct(productName);
      setProduct(res.product);
    }
  };

  const handleAddProduct = () => {
    addProduct({ ...product, quantity });
  };

  const decreaseQuantity = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {product && (
        <div className="product">
          <div className="product__image-container">
            <img className="product__image" src={product?.image} alt={product?.title} />
          </div>
          <div className="product__details">
            <p className="product__title">{product?.title}</p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="product__price">{product?.price}€</p>

              <div onClick={() => navigate(`/category/${product?.categoryId?.name}`)}>
                <p className="product__category"> {product?.categoryId?.name}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-2 bg-light">
              <Button className="w-100" onClick={decreaseQuantity}>
                -
              </Button>
              <span className="w-100 text-center m-0 lh-0">{quantity}</span>
              <Button className="w-100" onClick={increaseQuantity}>
                +
              </Button>
            </div>
            <Button variant="warning" onClick={handleAddProduct}>
              Add to cart
            </Button>
            <p className="product__description">{product?.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
