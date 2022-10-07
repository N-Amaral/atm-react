import React from "react";

const OperationConfirmation = () => {
  return (
    <div className="confirmation-wrapper">
      <div className="confirmation-info">
        <span>
          <h1>transferência multibanco</h1>
        </span>
        <div>
          <span>
            <h3>para o mesmo banco: crédito no próprio dia</h3>
          </span>
          <span>
            <h3>para outro banco - até às 15h de dia útil: crédito até ao 1º dia útil seguinte</h3>
          </span>
          <span>
            <h3>para outro banco -depois das 15h ou em dia não útil: crédito até ao 2º dia útil seguinte</h3>
          </span>
        </div>
      </div>
      <div className="confirmation-container"></div>
    </div>
  );
};

export default OperationConfirmation;
