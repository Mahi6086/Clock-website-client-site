import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navber from "../../Shared/Navber/Navber";

import Banner from "../Banner/Banner";
import Collections from "../Collections/Collections";
import Services from "../Services/Services/Services";
import Testimonals from "../Testimonals/Testimonals";

const Home = () => {
  return (
    <div>
      <Navber></Navber>
      <Banner></Banner>
      <Collections></Collections>
      <Services></Services>
      <Testimonals></Testimonals>
      <Footer></Footer>
    </div>
  );
};

export default Home;
