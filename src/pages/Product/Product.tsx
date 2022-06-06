import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/api";
import "./Product.scss";

const Product = () => {
  const [product, setProduct] = useState<any>();
  const { name } = useParams();

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

  return (
    <>
      {product && (
        <div className="product">
          <div className="product__image-container">
            <img className="product__image" src={product?.image} alt={product?.title} />
          </div>
          <div className="product__details">
            <p className="product__title">{product?.title}</p>
            <div className="d-flex justify-content-between">
              <p className="product__price">{product?.price}€</p>
              <p className="product__category">{product?.categoryId?.name}</p>
            </div>
            <Button variant="warning">Add to cart</Button>
            <p className="product__description">{product?.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
