import { useState } from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div>
      <Banner setSearchKey={setSearchKey}></Banner>
      <Categories searchKey={searchKey}></Categories>
    </div>
  );
};

export default Home;
