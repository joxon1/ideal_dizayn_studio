import React from "react";
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
                return (
                  <tr className="table_container" key={index}>
                    <td className="table_title">{product.title}</td>
                    <td>{product.tipe}</td>
                    <td>{product.things}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Prays;
