import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/api";

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
        <div className="d-flex">
          <img src={product?.image} alt={product?.title} />
          <div>
            <p>{product?.categoryId?.name}</p>
            <p>{product?.description}</p>
            <p>{product?.pridce}</p>
            <p>{product?.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
