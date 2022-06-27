import React from "react";

const Table = (props) => {
  return (
    <tr className="table_container">
      <td className="table_title">{props.title}</td>
      <td>{props.tipe}</td>
      <td>{props.things}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default Table;
