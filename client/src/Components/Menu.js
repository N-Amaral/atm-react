import { React, useEffect } from "react";

const Operation = (props) => {
  return (
    <>
      <li className="operation-item">{props.name}</li>
    </>
  );
};

const Menu = () => {
  const operations = ["Check Account Balance", "Deposits", "Withdrawls", "Payments", "Transfers", "Operation History", "Exit"];
  useEffect(() => {
    const items = document.querySelectorAll(".operation-item");
    items.forEach((element) => {
      element.addEventListener("click", () => console.log("Clicked"));
    });
  }, []);
  return (
    <div className="main-menu">
      <div className="operations-container">
        <ul className="operations-list">
          {operations.map((operation, i) => {
            return <Operation name={operation} key={i} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
