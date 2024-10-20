import React from 'react';

const MobileInput = ({ register, errors }) => {
  return (
    <div className="col col-lg-6 col-md-12 col-sm-12 col-12">
      <label htmlFor="mobile" className="mt-4">
        Mobile Number <span>*</span>
      </label>
      <div className="input-group mt-2">
        <span className="input-group-text" id="basic-addon1">+91 </span>
        <input
          type="text"
          name="mobile"
          id="mobile"
          className="form-control"
          placeholder="Enter mobile number"
          {...register("mobile", {
            required: "Mobile number is required",
            pattern: {
              value: /^[6-9]\d{9}$/,
              message: "Enter a valid 10-digit mobile number"
            }
          })}
        />
      </div>
      {errors.mobile && <p className="error">{errors.mobile.message}</p>}
    </div>
  );
};

export default MobileInput;
