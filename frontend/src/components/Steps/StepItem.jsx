import React from "react";

const StepItem = ({ stepNumber, text, isLastStep }) => {
  return (
    <div className="col-lg-2 col-md-6 col-sm-12 step-container">
      <div className="step-box">{stepNumber}</div>
      <p className="p-2 px-2 step-text">{text}</p>
      {!isLastStep && <div className="dashed-line"></div>}
    </div>
  );
};

export default StepItem;
