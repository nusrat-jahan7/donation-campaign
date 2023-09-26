// import { useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
// import setToLocalStorage from "../CategoryDetails/CategoryDetails"
import img from "../../assets/images/Education.png"

const Donation = () => {
  // const categories = useLoaderData();

  // useEffect(() => {
  //   const storedCategories = setToLocalStorage();
  //   if(categories.length > 0) {
  //     const donatedCategories = categories.filter(category => storedCategories.includes(category.id))
  //     console.log(donatedCategories);
  //   }
  // },[])

  return (
    <div className="grid grid-cols-2 container mx-auto mt-10 gap-20">
      <div className="card card-side bg-base-100 shadow-xl gap-5">
        <figure>
          <img
            className="h-full"
            src={img}
            alt="Movie"
          />
        </figure>
        <div className="">
        <button
            className="my-3 rounded-md px-2 py-1 font-semibold bg-blue-200 text-blue-800"
          >
            Education
          </button>
          <h2 className="card-title">New movie is released!</h2>
          <p className="text-lg font-semibold">$29</p>
          <div className="card-actions">
            <button className="my-3 rounded font-semibold text-lg px-2 py-1 bg-blue-300">View Details</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Donation;
