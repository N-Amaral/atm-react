import { React, useEffect } from "react";

const Operation = (props) => {
  return (
    <>
      <li className="operation-item" id={`op${props.elementId}`}>
        <a href="/">{props.name}</a>
      </li>
    </>
  );
};

const Menu = () => {
  const operations = ["Check Account Balance", "Deposits", "Withdrawls", "Payments", "Transfers", "Operation History", "Exit"];

  useEffect(() => {
    const items = document.querySelectorAll(".operation-item");
    items.forEach((element) => {
      const operation = element.id;
      element.addEventListener("click", () => console.log(operation));
    });
  }, []);

  return (
    <div className="main-menu">
      <div className="operations-container">
        <ul className="operations-list">
          {operations.map((operation, i) => {
            return <Operation name={operation} key={i} elementId={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
