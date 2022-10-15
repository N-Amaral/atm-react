import React from "react";
import { MenuList } from "./Menu";

const OperationConsults = (props: { dataSet: any[any] }) => {
  const dataSet: any[string] = Object.entries(props.dataSet["PT"]["consultas"]);
  const operations: string[] = [];

  dataSet.map((data: string) => {
    operations.push(data[1]);
    return operations;
  });

  return (
    <>
      <div className="operations-container">
        <MenuList list={operations} />
      </div>
    </>
  );
};

export default OperationConsults;
