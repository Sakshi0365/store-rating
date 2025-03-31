import { useState } from "react";

function UpdatePassword() {
  const [formData, setFormData] = useState({ currentPassword: "", newPassword: "" });
  const [message, setMessage] = useState("");

  const dummyUser = { email: "user@example.com", password: "User@123" }; // Simulating user login

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.currentPassword !== dummyUser.password) {
      setMessage("Incorrect current password!");
      return;
    }
    if (formData.newPassword.length < 8 || !/[A-Z]/.test(formData.newPassword) || !/[!@#$%^&*]/.test(formData.newPassword)) {
      setMessage("New password must be 8-16 characters, include one uppercase letter, and one special character.");
      return;
    }
    setMessage("Password updated successfully!");
  };

  return (
    <div className="container">
      <h2 className="text-2xl font-bold mb-4">Update Password</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input
          type="password"
          name="currentPassword"
          placeholder="Current Password"
          value={formData.currentPassword}
          onChange={(e) => setFormData({ ...formData, currentPassword: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="password"
          name="newPassword"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Update Password
        </button>
      </form>
      {message && <p className="mt-2 text-red-600">{message}</p>}
    </div>
  );
}

export default UpdatePassword;
