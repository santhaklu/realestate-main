import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './register.css'; // Ensure the CSS is imported correctly

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        contactno: '',
        address: '',
        dob: '',
        artPreference: '',
        newsletter: '',
    });

    const [errors, setErrors] = useState({
        emailError: '',
        contactnoError: '',
        passwordError: '',
        confirmPasswordError: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    // Validate fields based on the input
    const validateField = (name, value) => {
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let contactnoPattern = /^[0-9]{10}$/;
        let newErrors = { ...errors };

        switch (name) {
            case 'email':
                newErrors.emailError = emailPattern.test(value) ? '' : 'Invalid email format. Example: user@example.com';
                break;
            case 'contactno':
                newErrors.contactnoError = contactnoPattern.test(value) ? '' : 'Please enter a valid 10-digit contact number.';
                break;
            case 'password':
                newErrors.passwordError = value.length >= 8 ? '' : 'Password must be at least 8 characters long.';
                break;
            case 'confirmPassword':
                newErrors.confirmPasswordError = value === formData.password ? '' : 'Passwords do not match.';
                break;
            default:
                break;
        }
        setErrors(newErrors);
    };

    // Validate the form before submission
    const validateForm = () => {
        return !errors.emailError && !errors.contactnoError && !errors.passwordError && !errors.confirmPasswordError;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form logic (e.g., API call)
            console.log('Form data submitted:', formData);
        } else {
            console.log('Validation errors:', errors);
        }
    };

    return (
        <div>
            <header className="main-header">
                <div className="logo">
                    <h1>The Art Spectrum</h1>
                </div>
                <nav className="nav-links">
                    <Link to="/login">Login</Link> {/* Use Link for navigation */}
                    <Link to="#">About</Link>
                    <Link to="#">Contact</Link>
                </nav>
            </header>

            <div className="registerWindow">
                <div className="registerHeader">Art Gallery Registration</div>
                <div className="registerContent">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        <div className="error">{errors.emailError}</div>

                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        <div className="error">{errors.passwordError}</div>

                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                        <div className="error">{errors.confirmPasswordError}</div>

                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                            <option value="" disabled>---Select---</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefernot_tosay">Prefer not to say</option>
                        </select>

                        <label htmlFor="contactno">Contact Number:</label>
                        <input type="tel" id="contactno" name="contactno" value={formData.contactno} onChange={handleChange} required />
                        <div className="error">{errors.contactnoError}</div>

                        <label htmlFor="address">Address:</label>
                        <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />

                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

                        <label htmlFor="artPreference">Art Style Preference:</label>
                        <select id="artPreference" name="artPreference" value={formData.artPreference} onChange={handleChange} required>
                            <option value="" disabled>---Select---</option>
                            <option value="abstract">Abstract</option>
                            <option value="realism">Realism</option>
                            <option value="impressionism">Impressionism</option>
                            <option value="modern">Modern</option>
                            <option value="contemporary">Contemporary</option>
                        </select>

                        <label htmlFor="newsletter">Newsletter Subscription:</label>
                        <select id="newsletter" name="newsletter" value={formData.newsletter} onChange={handleChange} required>
                            <option value="" disabled>---Select---</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

                        <input type="submit" value="Register" />
                        
                        <div style={{ textAlign: 'center' }}>
                            <span className="loginPrompt" style={{ fontSize: '16px', color: '#333' }}>Already have an account? </span>
                            <Link to="/login" style={{ textDecoration: 'none', color: 'blue', fontSize: '16px',border:'none' ,background:'none'}}>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
