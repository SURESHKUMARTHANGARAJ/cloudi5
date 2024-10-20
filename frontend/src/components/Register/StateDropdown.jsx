import React, { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";

const StateDropdown = ({ register, errors }) => {
  const { states, selectedCountry } = useContext(RegisterContext);

  return (
    <div className="col col-lg-6 col-md-12 col-12">
      <label htmlFor="state" className="mt-4">State <span>*</span></label>
      <select
        id="state"
        className="w-100 mt-2"
        {...register("state", { required: "State is required" })}
        disabled={!selectedCountry}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.isoCode} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>
      {errors.state && <p className="error">{errors.state.message}</p>}
    </div>
  );
};

export default StateDropdown;
