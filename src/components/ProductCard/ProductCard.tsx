import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = ({ product }: any) => {
  const productUrl = product.title.replaceAll(" ", "-");
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img className="product-card__image" src={product.image} alt={product.title} />
      </div>
      <div className="product-card__details">
        <p className="product-card__name">{product.title}</p>
        <p className="product-card__price">{product.price}€</p>
        <Link to={`/product/${productUrl}`}>
          <Button>View details</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
