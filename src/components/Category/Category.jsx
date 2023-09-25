import { Link } from "react-router-dom";

const Category = ({ category }) => {
  // console.log(category);

  const {id, categoryName, title, image } = category;

  const categoryColor = {
    Health: " bg-blue-100 text-blue-600",
    Education: " bg-red-100 text-red-600",
    Clothing: " bg-green-100 text-green-600",
    Food: " bg-violet-100 text-violet-600",
  };

  const categoryButtonColor = {
    Health: " bg-blue-200 ",
    Education: " bg-red-200 ",
    Clothing: " bg-green-200 ",
    Food: " bg-violet-200 ",
  };

  return (
    <div className={`rounded-xl ${categoryColor[categoryName]} `}>
      <Link to={`/category-details/${id}`}>
        <img className="w-full" src={image} alt="" />
        <div className="p-4">
          <button
            className={`my-3 rounded-md px-2 py-1 ${categoryButtonColor[categoryName]}`}
          >
            {categoryName}
          </button>
          <h3 className="text-xl line-clamp-1 font-semibold">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Category;
