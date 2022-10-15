import React, { useState, useEffect } from "react";
import "./styles/app.css";
// import Header from "./Components/Header";

import { Menu } from "./components/Menu";
import OperationWithdrawl from "./components/OperationWithdrawl";
import ErrorPage from "./components/ErrorPage";
import Keyboard from "./components/Keyboard";
import Screenkeys from "./components/ScreenKeys";
import OperationTransfer from "./components/OperationTransfer";
import OperationConfirmation from "./components/OperationConfirm";
import OperationPayment from "./components/OperationPayment";
import OperationQuery from "./components/OperationQueries";
import OperationDeposits from "./components/OperationDeposits";
import OperationLogin from "./components/OperationLogin";

// state

import { operationList } from "./state";

const App = () => {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  const [data, setData] = useState(operationList);

  let component = undefined;
  switch (window.location.pathname) {
    case "/" || "/login":
      component = <OperationLogin />;
      break;
    case "/menu":
      component = <Menu dataSet={data} />;
      break;
    case "/levantamentos":
      component = <OperationWithdrawl dataSet={data["PT"]["levantamentos"]} />;
      break;
    case "/transferencias":
      component = <OperationTransfer />;
      break;
    case "/confirm":
      component = <OperationConfirmation />;
      break;
    case "/pagamentos":
      component = <OperationPayment />;
      break;
    case "/consultas":
      component = <OperationQuery dataSet={data["PT"]["consultas"]} />;
      break;
    case "/depositos":
      component = <OperationDeposits />;
      break;

    default:
      component = <ErrorPage />;
      break;
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <Screenkeys />
        <div className="main-menu">{component}</div>
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
