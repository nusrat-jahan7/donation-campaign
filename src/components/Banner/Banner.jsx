const Banner = () => {
  return (
    <div className="my-20 ">
      <h1 className="text-5xl text-gray-700 text-center font-bold">
        I Grow By Helping People In Need
      </h1>
      <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search here...."
          className="input input-bordered w-full max-w-xs"
        />
        <button className="px-4 hover:bg-red-600 focus:outline-none focus:ring-red-300 bg-red-500 text-white font-semibold -ml-5 rounded-r-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
