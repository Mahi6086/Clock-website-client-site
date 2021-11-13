import React from "react";

import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";
import Services from "../Services/Services/Services";
import Testimonals from "../Testimonals/Testimonals";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Collections></Collections>
      <Services></Services>
      <Testimonals></Testimonals>
    </div>
  );
};

export default Home;
