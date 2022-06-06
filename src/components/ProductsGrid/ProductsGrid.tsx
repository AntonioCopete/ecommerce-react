import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.scss";

const ProductsGrid = ({ products }: any) => {
  return (
    <div className="product-grid">
      {products.map((product: any) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};

export default ProductsGrid;
