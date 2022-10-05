import React, { useEffect } from "react";
import { MenuList } from "./Menu";

const OperationConsults = (props) => {
  const dataSet = Object.entries(props.dataSet["PT"]["consultas"]);
  const operations = [];

  dataSet.map((data) => {
    operations.push(data[1]);
    return operations;
  });
  console.log(MenuList);
  return (
    <>
      <div className="title-container">
        <h1>consultas</h1>
      </div>
      <div className="operations-container">
        <MenuList list={operations} />
      </div>
    </>
  );
};

export default OperationConsults;
