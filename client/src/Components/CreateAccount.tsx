import React from "react";

const CreateAccountForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="accountFormName" className="form-label">
          Account Name
        </label>
        <input type={"text"} className={"form-control"} id={"accountName"}></input>
      </div>
      <div className="mb-3">
        <label htmlFor="accountFormPin" className="form-label">
          Account Pin
        </label>
        <input type={"tel"} className={"form-control"} id={"accountPin"}></input>
      </div>
    </form>
  );
};

const CreateAccountModal = () => {
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
            <button type="button" className="btn btn-primary">
              Create Acount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;
