import React, { useState } from 'react';
import Header from './sellernav';
const ChangePass= () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage('');

        // Basic validation for empty fields
        if (!currentPassword || !newPassword || !confirmPassword) {
            setErrorMessage("Please enter all fields.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage("New password and confirmation do not match.");
            return;
        }

        alert("Password updated successfully!"); // Placeholder success alert
    };

    return (
        <div>
            <Header/>
            <h2>Change Password</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Current Password:</label>
                    <input
                        type="password"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm New Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Change Password</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default ChangePass;
