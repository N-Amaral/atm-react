import { React, useEffect } from "react";

const Operation = (props) => {
  return (
    <>
      <li className="operation-item" id={`op${props.elementId}`}>
        <div className="number-box">
          <span>{props.elementId + 1}</span>
        </div>
        <div className="operation-box">
          <a href="/">{props.name}</a>
        </div>
      </li>
    </>
  );
};

const Menu = () => {
  const operations = ["Withdrawls", "Consults", "Transfers & Direct Debit", "Payments", "Deposits", "Exit"];

  useEffect(() => {
    const items = document.querySelectorAll(".operation-item");
    items.forEach((element) => {
      const operation = element.id;
      element.addEventListener("click", () => console.log(operation));
    });
  }, []);

  return (
    <div className="operations-container">
      <ul className="operations-list">
        {operations.map((operation, i) => {
          return <Operation name={operation} key={i} elementId={i} />;
        })}
      </ul>
    </div>
  );
};

export default Menu;
