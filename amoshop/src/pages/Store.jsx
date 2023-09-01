import React from "react";
import Slider from "../components/Slider";
import { slidesData } from "../components/slideData";
import MenuBar from "../components/MenuBar";
import WhatIsNew from "../components/WhatIsNew";
import RestofPage from "../components/RestofPage";
import BestSeller from "../components/BestSeller";

const Store = () => {
  return (
    <section>
      <Slider slides={slidesData} />
      <MenuBar />
      <BestSeller />
      <WhatIsNew />
      <RestofPage />
    </section>
  );
};

export default Store;
