const Category = ({ category }) => {
  // console.log(category);

  const { categoryName, title, image } = category;

  return (
      <div className="rounded-xl bg-red-200">
        <img className="w-full" src={image} alt="" />
        <div className="p-4">
          <button className="btn border-0 btn-sm my-3 bg-red-400 text-red-900">
            {categoryName}
          </button>
          <h3 className="text-xl line-clamp-1 text-red-900 font-semibold">
            {title}
          </h3>
        </div>
      </div>
  );
};

export default Category;
