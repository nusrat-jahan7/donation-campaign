import { useLoaderData } from "react-router-dom";
import toast from "react-hot-toast";

const CategoryDetails = () => {
  const allCategory = useLoaderData();
  const categoryId = window.location.pathname.slice(-1);
  const currentCategory = allCategory.find(
    (category) => category.id === +categoryId
  );

  const setToLocalStorage = () => {
    const categories = JSON.parse(localStorage.getItem("categories")) || [];
    const categoryExist = !!categories.find(
      (category) => category.id === currentCategory.id
    );

    if (categoryExist) {
      toast.error("Already Donated!!");
    } else {
      categories.push(currentCategory);
      localStorage.setItem("categories", JSON.stringify(categories));
      toast.success("Successfully Donated!");
    }
  };

  const { rectangleImage, title, description, donationPrice } = currentCategory;

  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          className="w-full my-4 h-[40rem] object-cover rounded-lg"
          src={rectangleImage}
          alt=""
        />
        <button
          onClick={() => setToLocalStorage()}
          className="absolute border-0 bottom-5 left-5 btn bg-red-500 hover:bg-red-600 text-white z-50"
        >
          Donate ${donationPrice}
        </button>
        <div className="h-24 w-full absolute bottom-0 bg-black/50">
          <h1 style={{ visibility: "hidden" }}>bokkor chokkor</h1>
        </div>
      </div>
      <h1 className="text-4xl font-bold my-4"> {title} </h1>
      <p className="leading-8 mb-3">{description}</p>
    </div>
  );
};

export default CategoryDetails;
