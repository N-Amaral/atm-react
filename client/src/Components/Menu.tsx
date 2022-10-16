import React from "react";

const Operation = (props: { name: string; elementId: number; value: number | undefined; route: string | undefined }) => {
  return (
    <>
      <li className="operation-item" id={`${props.elementId}`}>
        <div className="number-box">
          <span>{props.elementId + 1}</span>
        </div>
        <div className="operation-box">
          <a href={props.route !== undefined ? props.route : props.name}>{props.name}</a>
        </div>
      </li>
    </>
  );
};

const MenuList = (props: { list: string[]; values: number[] | undefined; routes: string[] | undefined }) => {
  return (
    <ul className="operations-list">
      {props.list.map((operation, i) => {
        return (
          <Operation
            name={operation}
            key={i}
            elementId={i}
            value={props.values !== undefined ? props.values[i] : undefined}
            route={props.routes !== undefined ? props.routes[0] : undefined}
          />
        );
      })}
    </ul>
  );
};

const Menu = (props: { dataSet: {} }) => {
  const dataSet: string[] = Object.keys(props.dataSet);

  return (
    <div className="operations-container">
      <MenuList list={dataSet} values={undefined} routes={undefined} />
    </div>
  );
};

export { MenuList, Menu };
