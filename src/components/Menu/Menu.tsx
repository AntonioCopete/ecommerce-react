import { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { fetchCategories, fetchCategoryProducts } from "../../api/api";
import "./Menu.scss";

const Menu = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const res = await fetchCategories();
    setCategories(res.categories);
  };

  return (
    <div className="menu">
      <Dropdown>
        <Dropdown.Toggle id="dropdown-menu">
          <FiMenu size={30} />
          <span>Todas las categorías</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories?.map((category: any) => {
            return (
              <Dropdown.Item
                key={category._id}
                onClick={() => navigate(`/category/${category.name.replace(" ", "-")}`)}
              >
                {category.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Menu;
