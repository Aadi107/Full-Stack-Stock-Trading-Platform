import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";

const INITIAL_BALANCE = 4043.10;

const Funds = () => {
  const [availableCash, setAvailableCash] = useState(INITIAL_BALANCE);
  const [modalType, setModalType] = useState(null);
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState(null);

  const formatAmount = (value) =>
    value.toLocaleString("en-IN", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const openModal = (type) => {
    setModalType(type);
    setAmount("");
    setMessage(null);
  };

  const closeModal = () => {
    setModalType(null);
    setAmount("");
  };

  const handleTransaction = (e) => {
    e.preventDefault();

    const transactionAmount = Number(amount);

    if (!Number.isFinite(transactionAmount) || transactionAmount <= 0) {
      setMessage({
        type: "error",
        text: "Please enter a valid amount greater than zero.",
      });
      return;
    }

    if (modalType === "withdraw" && transactionAmount > availableCash) {
      setMessage({
        type: "error",
        text: "Insufficient available balance for this withdrawal.",
      });
      return;
    }

    if (modalType === "add") {
      setAvailableCash((previous) => previous + transactionAmount);

      setMessage({
        type: "success",
        text: `₹${formatAmount(transactionAmount)} added successfully to your demo balance.`,
      });
    } else {
      setAvailableCash((previous) => previous - transactionAmount);

      setMessage({
        type: "success",
        text: `₹${formatAmount(transactionAmount)} withdrawn successfully from your demo balance.`,
      });
    }

    setAmount("");
  };

  return (
    <div className="funds-page">
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <button
          type="button"
          className="btn btn-green"
          onClick={() => openModal("add")}
        >
          Add funds
        </button>

        <button
          type="button"
          className="btn btn-blue"
          onClick={() => openModal("withdraw")}
        >
          Withdraw
        </button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">
                {formatAmount(availableCash)}
              </p>
            </div>

            <div className="data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>

            <div className="data">
              <p>Available cash</p>
              <p className="imp">
                {formatAmount(availableCash)}
              </p>
            </div>

            <hr />

            <div className="data">
              <p>Opening Balance</p>
              <p>{formatAmount(INITIAL_BALANCE)}</p>
            </div>

            <div className="data">
              <p>Current Balance</p>
              <p>{formatAmount(availableCash)}</p>
            </div>

            <div className="data">
              <p>Payin</p>
              <p>4,064.00</p>
            </div>

            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>

            <hr />

            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>

            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>

            <Link to="#" className="btn btn-blue">
              Open Account
            </Link>
          </div>
        </div>
      </div>

      {modalType && (
        <div
          className="fund-modal-overlay"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className="fund-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fund-modal-title"
          >
            <button
              type="button"
              className="fund-modal-close"
              onClick={closeModal}
              aria-label="Close"
            >
              ×
            </button>

            <h2 id="fund-modal-title">
              {modalType === "add" ? "Add Funds" : "Withdraw Funds"}
            </h2>

            <p className="fund-modal-description">
              {modalType === "add"
                ? "Add money to your simulated trading account."
                : "Withdraw money from your simulated trading account."}
            </p>

            <div className="fund-modal-balance">
              <span>Available balance</span>
              <strong>₹{formatAmount(availableCash)}</strong>
            </div>

            <form onSubmit={handleTransaction}>
              <label htmlFor="fund-amount">Enter amount (₹)</label>

              <input
                id="fund-amount"
                type="number"
                min="0.01"
                step="0.01"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                autoFocus
              />

              {message && (
                <p
                  className={`fund-message ${message.type}`}
                  role="status"
                >
                  {message.text}
                </p>
              )}

              <div className="fund-modal-actions">
                <button
                  type="button"
                  className="fund-cancel"
                  onClick={closeModal}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={
                    modalType === "add"
                      ? "fund-submit add"
                      : "fund-submit withdraw"
                  }
                >
                  {modalType === "add" ? "Add Funds" : "Withdraw"}
                </button>
              </div>
            </form>

            <p className="fund-demo-note">
              Demo transaction only. No actual money will be transferred.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;
