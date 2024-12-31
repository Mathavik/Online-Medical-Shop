import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import { useUserContext } from "../components/products/ordercontext/userContext";
import "./loginPage.css";

// Reusable Input Component
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

const LoginPage = () => {
    const navigate = useNavigate();
    const { setLoggedInUser } = useUserContext(); 
    const [formValues, setFormValues] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null); // Renamed to avoid conflict

    const handleChange = (field) => (e) => {
        setFormValues({ ...formValues, [field]: e.target.value });
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        setHasSubmitted(true);

        // Retrieve registered user details from localStorage
        const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

        const newErrors = {};

        if (!registeredUser) {
            // No user registered
            newErrors.userName = "No account exists. Please register first.";
            newErrors.email = "No account exists. Please register first.";
            newErrors.password = "No account exists. Please register first.";
        } else {
            if (registeredUser.userName !== formValues.userName) {
                newErrors.userName = "Username does not match or you need to register first.";
            }
            if (registeredUser.email !== formValues.email) {
                newErrors.email = "Email does not match our records.";
            }
            if (registeredUser.password !== formValues.password) {
                newErrors.password = "Password is incorrect.";
            }
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Successful login
            sessionStorage.setItem("loggedInUser", formValues.userName);
            setLoggedInUser(formValues.userName); // Context update
            setCurrentLoggedInUser(formValues.userName); // Update local state
            navigate("/productPage");
        } else {
            alert("Invalid credentials. Please register first or check your details.");
        }
    };

    useEffect(() => {
        if (hasSubmitted) {
            // Perform any necessary post-submit validation or actions
        }
    }, [formValues, hasSubmitted]);

    return (
        <div className="loginpage-container">
            <div className="form">
                <h1>Login Page</h1>
                <form onSubmit={handleSignIn}>
                    <InputField
                        label="User Name:"
                        type="text"
                        value={formValues.userName}
                        onChange={handleChange("userName")}
                        error={hasSubmitted && errors.userName}
                        placeholder="Enter User Name"
                    />
                    <InputField
                        label="Email:"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange("email")}
                        error={hasSubmitted && errors.email}
                        placeholder="Enter Email Id"
                    />
                    <InputField
                        label="Password:"
                        type="password"
                        value={formValues.password}
                        onChange={handleChange("password")}
                        error={hasSubmitted && errors.password}
                        placeholder="Enter Password"
                    />
                    <button type="submit" className="signin-button">
                        {currentLoggedInUser ? currentLoggedInUser : "Login"}
                    </button>
                    <Link to="/registerPage">Register</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
