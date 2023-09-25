import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    fetch("public/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container mx-auto gap-10 my-10">
      {categories.map((category) => (
        <Category key={category.id} category={category}></Category>
      ))}
    </div>
  );
};

export default Categories;
