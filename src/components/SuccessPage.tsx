import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import "../styles/Success.css";
const SuccessPage = () => {
  return (
    <div className="success-container">
      <CheckCircleIcon className="success-icon" />
      <h1 className="success-title">Submission Successful!</h1>
      <p className="success-message">
        Thank you for submitting. We have received your response.
      </p>
      <button
        className="success-button"
        onClick={() => (window.location.href = "/")}>
        Go to Home
      </button>
    </div>
  );
};

export default SuccessPage;
