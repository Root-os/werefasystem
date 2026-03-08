import React, { useContext, useState } from "react";
import ThemeContext from "../components/layout/ThemeContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const mockUsers = [
  { id: 1, firstName: "gnfsdghmg", middleName: "jgythrgfsdasdfgh", phoneNumber: "hmgfdsdfg" },
  { id: 2, firstName: "SuperAdmin", middleName: null, phoneNumber: null },
  { id: 3, firstName: "yohi", middleName: "mesfin", phoneNumber: "0912345678" },
  { id: 4, firstName: "mishak", middleName: "mesfin", phoneNumber: "0911111111" },
];

const UserPage = () => {
  const { theme, currentTheme } = useContext(ThemeContext);
  const [users, setUsers] = useState(mockUsers);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`p-6 rounded-lg shadow ${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className={`text-2xl font-bold ${theme.text}`}>Users</h1>
        <p className={currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}>
          List of registered users.
        </p>
      </div>

      {/* Users Table */}
      <div
        className={`p-6 rounded-lg shadow ${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr
                className={
                  currentTheme === "dark"
                    ? "border-b border-gray-700 text-gray-300"
                    : "border-b text-gray-600"
                }
              >
                {/* <th className="py-3">ID</th> */}
                <th className="py-3">First Name</th>
                <th className="py-3">Middle Name</th>
                <th className="py-3">Phone Number</th>
                <th className="py-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className={`border-b ${
                    currentTheme === "dark"
                      ? "border-gray-700 hover:bg-gray-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* <td className="py-3 font-medium">{user.id}</td> */}
                  <td className="py-3">{user.firstName || "-"}</td>
                  <td className="py-3">{user.middleName || "-"}</td>
                  <td className="py-3">{user.phoneNumber || "-"}</td>

                  {/* Actions */}
                  <td className="py-3 flex gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FiEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;