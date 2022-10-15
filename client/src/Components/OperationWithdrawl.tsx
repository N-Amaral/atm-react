import React, { useEffect } from "react";
import { MenuList } from "./Menu";
import { cancelInput } from "../scripts/scripts";

const OperationWithdrawl = (props: { dataSet: { opTitles: string[]; opValues: number[]; opRoutes: string[] } }) => {
  const titleSet: string[] = Object.values(props.dataSet.opTitles);
  const valueSet: number[] = Object.values(props.dataSet.opValues);

  const operations: string[] = [];
  const values: number[] = [];

  titleSet.map((data: string) => {
    operations.push(data);
    return operations;
  });
  valueSet.map((data: number) => {
    values.push(data);
    return values;
  });

  useEffect(() => {
    const items: NodeListOf<Element> = document.querySelectorAll(".operation-item");
    const sidepadBtns: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    sidepadBtns[0].addEventListener("click", () => {
      cancelInput();
    });

    items.forEach((element) => {
      const operation = element.id;
      element.addEventListener("click", () => console.log(operation));
    });
  }, []);

  return (
    <>
      <div className="operations-container">
        <MenuList list={operations} values={values} />
      </div>
    </>
  );
};
export default OperationWithdrawl;
