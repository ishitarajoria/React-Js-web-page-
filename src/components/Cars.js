import React from "react";
import {Link} from "react-router-dom";
import { cars } from "../data";
import "./cars.css";
export const Cars = ({setCar}) => {
  return (
    <div>
      {cars.map((item,index) => {
        return (
          <Link to='/details' className="cars" onClick={()=>setCar(item)} key={index} >
            <div className="car">{item.brand}</div>
          </Link>
        );
      })}
    </div>
  );
};
