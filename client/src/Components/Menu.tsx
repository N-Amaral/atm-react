import React from "react";

const Operation = (props: { name: string; elementId: number }) => {
  return (
    <>
      <li className="operation-item" id={`${props.elementId}`}>
        <div className="number-box">
          <span>{props.elementId + 1}</span>
        </div>
        <div className="operation-box">
          <a href={`${props.name}`}>{props.name}</a>
        </div>
      </li>
    </>
  );
};

const MenuList = (props: { list: string[] }) => {
  return (
    <ul className="operations-list">
      {props.list.map((operation, i) => {
        return <Operation name={operation} key={i} elementId={i} />;
      })}
    </ul>
  );
};

const Menu = (props: { dataSet: any[string] }) => {
  const dataSet = Object.entries(props.dataSet["PT"]);
  const operations: string[] = [];

  dataSet.map((data) => {
    operations.push(data[0]);
    return operations;
  });

  return (
    <div className="operations-container">
      <MenuList list={operations} />
    </div>
  );
};

export { MenuList, Menu };
