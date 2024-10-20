import React from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import FormInput from "./FormInput";
import FormInput2 from "./FormInput2";
import FormTextarea from "./FormTextarea";
import CountryDropdown from "./CountryDropdown";
import StateDropdown from "./StateDropdown";
import MobileInput from "./MobileInput";

const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    
    try {
      const response = await fetch('http://localhost:5000/api/v1/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
          Swal.fire({
            title: 'Success!',
            text: 'Your form has been submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          reset();
      } else {
          const errorData = await response.json();
          Swal.fire({
            title: 'Error!',
            text: `Submission failed: ${errorData.message || 'Unknown error'}`,
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
      }
      } catch (error) {
        console.error('Error submitting form:', error);
        Swal.fire({
          title: 'Error!',
          text: 'An unexpected error occurred. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
    }
  };

  return (
    <div className="register p-3" id="register">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="form-title p-3 mt-5">Fill the details below:</p>
        <div className="container-fluid p-3">
          <div className="row">

            <FormInput label="Name" id="name" placeholder="Enter name" register={register} errors={errors} />
            <MobileInput register={register} errors={errors} />
            <FormInput2 label="Email" id="email" placeholder="Enter email" type="email" register={register} errors={errors} />     
            <CountryDropdown register={register} errors={errors} />
            <StateDropdown register={register} errors={errors} />
            <FormInput2 label="City" id="city" placeholder="Enter city" register={register} errors={errors} />
            <FormInput2 label="Pincode" id="pincode" placeholder="Enter pincode" register={register} errors={errors} />
            <FormTextarea label="Address" id="address" placeholder="Enter address" register={register} errors={errors} />

          <div className="col col-12 mt-3">
            <p className="terms">By clicking submit, I agree to the <span><u>Terms and Conditions & Privacy Policy</u></span></p>
          </div>

          <div className="col col-12 mb-5 mt-3">
            <button type="submit" className="w-100 text-center p-3 submit">Submit</button>
          </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
