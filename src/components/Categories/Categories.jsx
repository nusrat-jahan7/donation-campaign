import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = ({ searchKey }) => {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setFilteredCategories(data);
      });
  }, []);

  useEffect(() => {
    const filtered = categories.filter((category) =>
      category?.categoryName?.toLowerCase().includes(searchKey?.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [categories, searchKey]);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto gap-10 my-10">
      {filteredCategories?.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
};

export default Categories;
