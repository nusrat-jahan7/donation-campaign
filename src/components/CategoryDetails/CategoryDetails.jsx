import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
  const allCategory = useLoaderData();
  const categoryId = window.location.pathname.slice(-1);
  const currentCategory = allCategory.find(
    (category) => category.id === +categoryId
  );

  console.log(currentCategory);

  const { rectangleImage, title, description, donationPrice } = currentCategory;

  return (
    <div className="container mx-auto">
      <div className="relative">
        <img
          className="w-full my-4 h-[40rem] object-cover rounded-lg"
          src={rectangleImage}
          alt=""
        />
        <button className="absolute border-0 bottom-5 left-5 btn bg-red-500 hover:bg-red-600 text-white z-50">
          Donate ${donationPrice}
        </button>
        <div className="h-24 w-full absolute bottom-0 bg-black/50"><h1 style={{visibility:'hidden'}}>bokkor chokkor</h1></div>
      </div>
      <h1 className="text-5xl my-4"> {title} </h1>
      <p>{description}</p>
    </div>
  );
};

export default CategoryDetails;
