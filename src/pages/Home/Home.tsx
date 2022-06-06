import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts, fetchProducts } from "../../api/api";
import ProductsGrid from "../../components/ProductsGrid/ProductsGrid";

const Home = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (name) {
      getCategoryProducts();
    } else {
      getProducts();
    }
  }, [name]);

  const getProducts = async () => {
    const res = await fetchProducts();
    setProducts(res.products);
  };

  const getCategoryProducts = async () => {
    const res = await fetchCategoryProducts(name);
    setProducts(res.products);
  };
  return <ProductsGrid products={products} />;
};

export default Home;
