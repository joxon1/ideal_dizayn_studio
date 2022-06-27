import React from "react";
import Table from "../components/Table";
import PraysData from "../data/PraysData";
import "../style/Prays.css";

const Prays = () => {
  return (
    <div className="prays_container">
      {PraysData.map((item) => {
        return (
          <div className="content">
            <h2
              key={item.id}
              // ref={refs[item.id]}
            >
              {item.category}
            </h2>
            <table className="list">
              {item.product.map((product, index) => {
                return <Table key={index} {...product} />;
              })}
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Prays;
