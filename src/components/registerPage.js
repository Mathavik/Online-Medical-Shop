import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registerPage.css";

const InputField = ({ label, type, value, onChange, error, placeholder }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: "",
    gender: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    avatar: null, // Store avatar as a file object or base64 string
  });

  const [errors, setErrors] = useState({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Update form values dynamically
  const handleChange = (field) => (e) => {
    setFormValues({ ...formValues, [field]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormValues({ ...formValues, avatar: reader.result });
      };
      reader.readAsDataURL(file); // Store as base64 string
    }
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};
    if (!formValues.name.trim()) newErrors.name = "Name is required.";
    if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Valid email is required.";
    if (!formValues.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required.";
    if (formValues.password !== formValues.confirmPassword)
      newErrors.password = "Passwords must match.";
    if (!formValues.password || formValues.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
  
    if (validate()) {
      // Save registered user details to localStorage
      const registeredUser = {
        userName: formValues.name,
        email: formValues.email,
        password: formValues.password,
      };
      localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
  
      // alert("Account created successfully");
      navigate("/loginPage");
    }
  };
  

  return (
    <div className="registerpage-container">
      <div className="form">
        <h1>Register Page</h1>
        <form onSubmit={handleRegister}>
          <InputField
            label="Name:"
            type="text"
            value={formValues.name}
            onChange={handleChange("name")}
            error={hasSubmitted && errors.name}
            placeholder="Enter your name"
          />
          <InputField
            label="Email:"
            type="email"
            value={formValues.email}
            onChange={handleChange("email")}
            error={hasSubmitted && errors.email}
            placeholder="Enter your email"
          />
          <InputField
            label="Phone Number:"
            type="tel"
            value={formValues.phoneNumber}
            onChange={handleChange("phoneNumber")}
            error={hasSubmitted && errors.phoneNumber}
            placeholder="Enter your phone number"
          />
          <InputField
            label="Password:"
            type="password"
            value={formValues.password}
            onChange={handleChange("password")}
            error={hasSubmitted && errors.password}
            placeholder="Enter your password"
          />
          <InputField
            label="Confirm Password:"
            type="password"
            value={formValues.confirmPassword}
            onChange={handleChange("confirmPassword")}
            error={hasSubmitted && errors.confirmPassword}
            placeholder="Confirm your password"
          />
          <div className="form-group">
            <label>Avatar:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
            />
            {formValues.avatar && (
              <img
                src={formValues.avatar}
                alt="Avatar Preview"
                className="avatar-preview"
              />
            )}
            {hasSubmitted && errors.avatar && (
              <span className="error">{errors.avatar}</span>
            )}
          </div>
          <button type="submit" className="register-button" >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
