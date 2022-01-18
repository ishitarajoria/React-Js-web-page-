import React from "react";
import { Cars } from "../components/Cars"; //Default Import

const HomePage = ({ setCar }) => {
  return (
    <div>
      <Cars setCar={setCar} />
    </div>
  );
};

export default HomePage;
