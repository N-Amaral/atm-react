import React from "react";

const Operation = (props) => {
  return (
    <>
      <li className="operation-item" id={`op${props.elementId}`}>
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

const MenuList = (props) => {
  return (
    <ul className="operations-list">
      {props.list.map((operation, i) => {
        return <Operation name={operation} key={i} elementId={i} />;
      })}
    </ul>
  );
};

const Menu = (props) => {
  const dataSet = Object.entries(props.dataSet["PT"]);
  const operations = [];

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
