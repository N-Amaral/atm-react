import React, { useEffect } from "react";
import { MenuList } from "./Menu";
import { cancelInput } from "../scripts/scripts";

const OperationWithdrawl = (props: { dataSet: { opTitles: string[]; opValues: number[]; opRoutes: string[] } }) => {
  const titleSet: string[] = Object.values(props.dataSet.opTitles);
  const valueSet: number[] = Object.values(props.dataSet.opValues);
  const routeSet: string[] = Object.values(props.dataSet.opRoutes);

  useEffect(() => {
    const sidepadBtns: NodeListOf<Element> = document.querySelectorAll(".sidepad-btn");

    sidepadBtns[0].addEventListener("click", () => {
      cancelInput();
    });
  }, []);

  return (
    <>
      <div className="operations-container">
        <MenuList list={titleSet} values={valueSet} routes={routeSet} />
      </div>
    </>
  );
};
export default OperationWithdrawl;
