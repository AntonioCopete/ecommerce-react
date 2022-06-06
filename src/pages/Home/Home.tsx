import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/api";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetchProducts();
    setProducts(res.products);
  };
  return <ProductsGrid products={products} />;
};

export default Home;
