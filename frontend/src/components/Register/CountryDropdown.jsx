import React, { useContext } from "react";
import { RegisterContext } from "../../context/RegisterContext";

const CountryDropdown = ({ register, errors }) => {
  const { countries, handleCountryChange } = useContext(RegisterContext);

  return (
    <div className="col col-lg-6 col-md-12 col-12">
      <label htmlFor="country" className="mt-4">Country <span>*</span></label>
      <select
        id="country"
        className="w-100 mt-2"
        {...register("country", { required: "Country is required" })}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>
      {errors.country && <p className="error">{errors.country.message}</p>}
    </div>
  );
};

export default CountryDropdown;
