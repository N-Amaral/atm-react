import { React, useEffect } from "react";

const OnScreen = (props) => {
  return (
    <>
      <li className="operation-item" id={`op${props.elementId}`}>
        <div className="number-box">
          <span>{props.elementId + 1}</span>
        </div>
        <div className="operation-box">
          <a href={`${props.name}`} style={{ textTransform: "uppercase" }}>
            {props.name}
          </a>
        </div>
      </li>
    </>
  );
};

const OperationWithdrawl = (props) => {
  const dataSet = Object.entries(props.dataSet["PT"])[0][1];
  const operations = [];

  dataSet.map((data) => {
    operations.push(data);
    return operations;
  });

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
          return <OnScreen name={operation} key={i} elementId={i} />;
        })}
      </ul>
    </div>
  );
};
export default OperationWithdrawl;
