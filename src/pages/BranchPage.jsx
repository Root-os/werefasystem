import React, { useContext, useState } from "react";
import ThemeContext from "../components/layout/ThemeContext";
import { FiPlus, FiEdit, FiTrash2, FiX } from "react-icons/fi";

const initialBranches = [
  {
    id: 1,
    name: "Kotebe Branch",
    location: "Kotebe, Addis Ababa",
    type: "VIP",
    institutionId: 7,
    Institution: { id: 7, name: "Ministry of Health" },
  },
  {
    id: 2,
    name: "Jemo Branch",
    location: "Jemo, Addis Ababa",
    type: "VIP",
    institutionId: 7,
    Institution: { id: 7, name: "Ministry of Health" },
  },
  {
    id: 3,
    name: "Gerji Branch",
    location: "Gerji, Addis Ababa",
    type: "VIP",
    institutionId: 8,
    Institution: { id: 8, name: "Ministry of Revenues" },
  },
];

const institutions = [
  { id: 7, name: "Ministry of Health" },
  { id: 8, name: "Ministry of Revenues" },
  { id: 9, name: "Ministry of Education" },
  { id: 10, name: "Ministry of Finance" },
];

const BranchPage = () => {
  const { theme, currentTheme } = useContext(ThemeContext);

  const [branches, setBranches] = useState(initialBranches);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    location: "",
    type: "VIP",
    institutionId: institutions[0].id,
  });

  const handleAdd = () => {
    const institution = institutions.find((i) => i.id === parseInt(form.institutionId));
    const newBranch = {
      id: branches.length + 1,
      name: form.name,
      location: form.location,
      type: form.type,
      institutionId: institution.id,
      Institution: institution,
    };
    setBranches([...branches, newBranch]);
    setForm({ name: "", location: "", type: "VIP", institutionId: institutions[0].id });
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setBranches(branches.filter((b) => b.id !== id));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div
        className={`flex justify-between items-center p-6 rounded-lg shadow ${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div>
          <h1 className={`text-2xl font-bold ${theme.text}`}>Branches</h1>
          <p className={currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}>
            Manage registered branches and their institutions
          </p>
        </div>

        {/* Add Branch Button */}
        <button
          onClick={() => setShowModal(true)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg shadow font-medium ${
            currentTheme === "dark"
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          <FiPlus /> Add Branch
        </button>
      </div>

      {/* Branch Table */}
      <div className={`p-6 rounded-lg shadow ${currentTheme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className={currentTheme === "dark" ? "border-b border-gray-700 text-gray-300" : "border-b text-gray-600"}>
                <th className="py-3 text-left">Logo</th>
                <th className="py-3 text-left">Branch Name</th>
                <th className="py-3 text-left">Location</th>
                <th className="py-3 text-left">Type</th>
                <th className="py-3 text-left">Institution</th>
                <th className="py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {branches.map((branch) => (
                <tr
                  key={branch.id}
                  className={`border-b ${currentTheme === "dark" ? "border-gray-700 hover:bg-gray-700" : "hover:bg-gray-50"}`}
                >
                  <td className="py-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                      {branch.name.charAt(0)}
                    </div>
                  </td>
                  <td className="py-3 font-medium">{branch.name}</td>
                  <td className="py-3">{branch.location}</td>
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        branch.type === "VIP" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {branch.type}
                    </span>
                  </td>
                  <td className="py-3">{branch.Institution?.name}</td>
                  <td className="py-3 flex gap-3">
                    <button className="text-blue-500 hover:text-blue-700">
                      <FiEdit />
                    </button>
                    <button onClick={() => handleDelete(branch.id)} className="text-red-500 hover:text-red-700">
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-gray-200/70 dark:bg-gray-900/70"
            onClick={() => setShowModal(false)}
          ></div>

          {/* Modal content */}
          <div
            className={`relative w-full max-w-md p-6 rounded-lg shadow-lg border ${
              currentTheme === "dark" ? "border-gray-700 bg-gray-800" : "border-gray-300 bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-xl font-semibold ${theme.text}`}>Add Branch</h2>
              <button onClick={() => setShowModal(false)}>
                <FiX />
              </button>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                placeholder="Branch Name"
                className="w-full border rounded-lg p-2"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="text"
                placeholder="Location"
                className="w-full border rounded-lg p-2"
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
              />
              <input
                type="text"
                placeholder="Type (VIP)"
                className="w-full border rounded-lg p-2"
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              />

              {/* Institution Dropdown */}
              <select
                className="w-full border rounded-lg p-2"
                value={form.institutionId}
                onChange={(e) => setForm({ ...form, institutionId: e.target.value })}
              >
                {institutions.map((inst) => (
                  <option key={inst.id} value={inst.id}>
                    {inst.name}
                  </option>
                ))}
              </select>

              {/* Modal Buttons */}
              <div className="flex justify-end gap-3 pt-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 rounded-lg text-white"
                  style={{
                    backgroundColor: currentTheme === "dark" ? "#4ade80" : "#16a34a",
                  }}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BranchPage;