import React from "react";
import StepItem from "./StepItem"; 

const Steps = () => {
  const stepsData = [
    { number: "01", text: "Register your interest" },
    { number: "02", text: "Team connects with you" },
    { number: "03", text: "Submit your proposal" },
    { number: "04", text: "Connect with our agency" },
    { number: "05", text: "Start business operation" },
  ];

  return (
    <div className="container-fluid p-3 step-cont">
      <h2 className="text-center mt-4 top-lead">Register your interest and wait for a callback</h2>
      <p className="lead text-center">You can own a branded licensed website in 5 simple steps</p>

      <div className="row text-center mt-5 mb-5 d-flex justify-content-center align-items-center cont">
        {stepsData.map((step, index) => (
          <StepItem
            key={step.number}
            stepNumber={step.number}
            text={step.text}
            isLastStep={index === stepsData.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Steps;
