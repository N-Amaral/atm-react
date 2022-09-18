import { React, useEffect } from "react";

const Login = () => {
  const validateInput = () => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  };

  useEffect(() => {
    validateInput();
  }, []);

  return (
    <div className="loginForm">
      <form className="row g-3 needs-validation" method="GET" noValidate>
        <div className="mb-1">
          <label htmlFor="loginControlAcc" className="form-label">
            Account Name
          </label>
          <input type="text" className="form-control" id="loginControlAcc" placeholder="test" required></input>
          <div className="valid-feedback">Looks Good</div>
          <div className="invalid-feedback">Please enter a valid Account Number</div>
        </div>
        <div className="mb-1">
          <label htmlFor="loginControlPass" className="form-label">
            Enter Password
          </label>
          <input type="password" className="form-control" id="loginControlPass" required></input>
          <div className="valid-feedback">Looks Good</div>
          <div className="invalid-feedback">Please enter a valid Password</div>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-2">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
