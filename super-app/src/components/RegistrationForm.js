import React, { useState } from "react";
import "../styles/RegistrationForm.css";

import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    mobile: "",
    email: "",
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // Clear the error message when the field is changed
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Field is required";
    }
    if (!formData.username) {
      newErrors.username = "Field is required";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Field is required";
    }
    if (!formData.email) {
      newErrors.email = "Field is required";
    }
    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = "Check this box if you want to proceed";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Registration successful - Save data to local storage
      localStorage.setItem("registrationData", JSON.stringify(formData));
      alert("Registration successful! Data saved in local storage.");
      // Reset the form
      setFormData({
        name: "",
        username: "",
        mobile: "",
        email: "",
        acceptedTerms: false,
      });
    }
  };

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    // Redirect to the new page when the "Sign Up" button is clicked
    navigate('/category');
  };

  return (
    <div className="reg">
      <div className="left-image">
        <div className="disover-text">
          <label className="left-text">Discover new things on Superapp</label>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <div className="wrap-up">
            <label className="heading-super">Super app</label>
            <br />
            <label className="header-text">Create your new account</label>
            <div>
              <input
                className="fields"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>

            <div>
              <input
                className="fields"
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && (
                <div className="error">{errors.username}</div>
              )}
            </div>

            <div>
              <input
                className="fields"
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <div className="error">{errors.mobile}</div>}
            </div>

            <div>
              <input
                className="fields"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>

            <div>
              <br />
              <label className="checkbox">
                <input
                  className="check"
                  type="checkbox"
                  name="acceptedTerms"
                  checked={formData.acceptedTerms}
                  onChange={handleChange}
                />{" "}
                Share my registration data with Superapp
              </label>
              {errors.acceptedTerms && (
                <div className="error">{errors.acceptedTerms}</div>
              )}
            </div>

            <br />
            <div className="tnc">
              <label className="text">
                By clicking on Sign up. you agree to Superapp{" "}
                <span>Terms and Conditions</span> of Use
              </label>
            </div>
            <br />
            <div className="tnc">
              <label className="text">
                To learn more about how Superapp collects, uses, shares and
                protects your personal data please head Superapp{" "}
                <span>Privacy Policy</span>
              </label>
            </div>

            <button onClick={handleSignUpClick} className="signup" type="submit">
              SIGN UP
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
