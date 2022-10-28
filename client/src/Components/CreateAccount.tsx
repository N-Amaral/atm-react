import React, { useEffect } from "react";

const CreateAccountForm = () => {
  return (
    <form className="needs-validation" id="accForm" method="GET" action="" noValidate>
      <div className="mb-3">
        <label htmlFor="accountFormName" className="form-label">
          Account Name
        </label>
        <input type={"text"} className={"form-control"} id={"accountName"} maxLength={20} pattern={"[A-zA-z]+"} required></input>
        <div className="valid-feedback">Valid Name</div>
        <div className="invalid-feedback">Invalid Name</div>
      </div>
      <div className="mb-3">
        <label htmlFor="accountFormPin" className="form-label">
          Account Pin
        </label>
        <input type={"tel"} className={"form-control"} id={"accountPin"} maxLength={4} pattern={"[0-9]+"} required></input>
        <div className="valid-feedback">Valid PIN</div>
        <div className="invalid-feedback">Invalid PIN</div>
      </div>
    </form>
  );
};

const CreateAccountModal = () => {
  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
      });
    });
  });

  return (
    <div className="modal fade" tabIndex={-1} id="createAccModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Account</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <CreateAccountForm />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="submit" form="accForm" className="btn btn-primary">
              Create Acount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;
