const Banner = ({ setSearchKey }) => {
  return (
    <section
      className="hero h-[600px] relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/wNTRQNn/volunteers-charity.jpg)",
      }}
    >
      <div className="overlays"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-black">
            I Grow By Helping People In Need
          </h1>

          <div className="join rounded-lg pt-10">
            <input
              onChange={(e) => setSearchKey(e.target.value)}
              id="search-field"
              className="input input-bordered join-item text-black w-60"
              placeholder="Search by category name..."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
