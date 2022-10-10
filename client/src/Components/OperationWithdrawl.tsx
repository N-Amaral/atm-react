import React, { useEffect } from "react";
import { MenuList } from "./Menu";

const OperationWithdrawl = (props: { dataSet: any[any] }) => {
  const dataSet: any[string] = Object.entries(props.dataSet["PT"])[0][1];
  const operations: string[] = [];

  dataSet.map((data: string) => {
    operations.push(data);
    return operations;
  });

  useEffect(() => {
    const items: NodeListOf<Element> = document.querySelectorAll(".operation-item");
    items.forEach((element) => {
      const operation = element.id;
      element.addEventListener("click", () => console.log(operation));
    });
  }, []);

  return (
    <>
      <div className="operations-container">
        <MenuList list={operations} />
      </div>
    </>
  );
};
export default OperationWithdrawl;
