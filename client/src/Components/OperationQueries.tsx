import React from "react";
import { MenuList } from "./Menu";

const OperationQuery = (props: { dataSet: string[] }) => {
  const dataSet: string[] = Object.values(props.dataSet);

  console.log(dataSet);

  return (
    <>
      <div className="operations-container">
        <MenuList list={dataSet} values={undefined} routes={undefined} />
      </div>
    </>
  );
};

export default OperationQuery;
