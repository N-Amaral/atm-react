import React, { useEffect } from "react";

const PageContent = () => {
  return (
    <div>
      <div className="title-container">
        <h1>ERRO</h1>
      </div>
      <div className="error-container">
        <p className="error-message"></p>
      </div>
    </div>
  );
};

const ErrorPage = () => {
  useEffect(() => {
    setTimeout(() => {
      window.location.replace("http://localhost:3000/menu");
    }, 3000);
  });
  return <PageContent />;
};

export default ErrorPage;
