import { useState } from "react";
import { Link } from "react-router-dom";

const Donation = () => {
  const data = JSON.parse(localStorage.getItem("categories"));

  const [hidden, setHidden] = useState(false);
  const [limit, setLimit] = useState(4);

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
    <>
      <div className="grid grid-cols-2 container mx-auto my-10 gap-20">
        {data?.slice(0, limit)?.map((item, index) => (
          <div
            key={index}
            className={`card card-side shadow-xl gap-5 ${
              categoryColor[item?.categoryName]
            }`}
          >
            <figure>
              <img className="h-full" src={item?.image} alt="Movie" />
            </figure>
            <div className="">
              <button
                className={`my-3 rounded-md px-2 py-1 font-semibold ${
                  categoryButtonColor[item?.categoryName]
                }`}
              >
                {item?.categoryName}
              </button>
              <h2 className="card-title">{item?.title}</h2>
              <p className="text-2xl font-semibold">${item?.donationPrice}</p>
              <div className="card-actions">
                <Link
                  to={`/category-details/${item?.id}`}
                  className={`my-3 rounded font-semibold text-lg px-2 py-1 ${
                    categoryButtonColor[item?.categoryName]
                  }`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!hidden && (
        <div className="flex justify-center my-10">
          <button
            onClick={() => {
              setLimit(data?.length), setHidden(true);
            }}
            className="btn px-6"
          >
            See All
          </button>
        </div>
      )}
    </>
  );
};

export default Donation;
