import React from "react";
import { MenuList } from "./Menu";

const OperationQuery = (props: { dataSet: string[] }) => {
  const dataSet: string[] = Object.values(props.dataSet);
  const operations: string[] = [];

  console.log(dataSet);
  dataSet.map((data: string) => {
    operations.push(data);
    return operations;
  });

  return (
    <>
      <div className="operations-container">
        <MenuList list={operations} values={undefined} />
      </div>
    </>
  );
};

export default OperationQuery;
