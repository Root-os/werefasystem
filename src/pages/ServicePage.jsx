import React, { useContext, useState } from "react";
import ThemeContext from "../components/layout/ThemeContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const mockServices = [
  { id: 1, name: "TIN Registration", description: "Register for a Taxpayer Identification Number (TIN).", serviceFee: "50.00", Branch: { id: 14, name: "Kotebe Branch" } },
  { id: 2, name: "TIN Registration", description: "Register for a Taxpayer Identification Number (TIN).", serviceFee: "50.00", Branch: { id: 15, name: "Jemo Branch" } },
  { id: 8, name: "VAT Registration", description: "Register your business for Value Added Tax (VAT).", serviceFee: "75.00", Branch: { id: 14, name: "Kotebe Branch" } },
  { id: 14, name: "Tax Collection", description: "Collection of taxes owed by individuals and businesses.", serviceFee: "100.00", Branch: { id: 15, name: "Jemo Branch" } },
  { id: 19, name: "Tax Clearance Certificate", description: "Obtain official clearance certificate for tax compliance.", serviceFee: "120.00", Branch: { id: 14, name: "Kotebe Branch" } },
];

const ServicePage = () => {
  const { theme, currentTheme } = useContext(ThemeContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleDelete = (id) => {
    alert(`Delete service with ID ${id}`); // Placeholder
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className={`${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow flex items-center justify-between`}>
        <div>
          <h1 className={`text-3xl font-bold ${theme.text}`}>Services</h1>
          <p className={currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}>List of available services.</p>
        </div>
        <button
          onClick={toggleModal}
          className={`px-4 py-2 rounded-md font-semibold transition
          ${currentTheme === "dark"
            ? "bg-blue-600 text-white hover:bg-blue-500"
            : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Add Service
        </button>
      </div>

      {/* Services Table */}
      <div className={`${currentTheme === "dark" ? "bg-gray-800" : "bg-white"} p-6 rounded-lg shadow overflow-x-auto`}>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className={currentTheme === "dark" ? "border-b border-gray-700" : "border-b"}>
              {/* <th className={`py-3 ${theme.text}`}>ID</th> */}
              <th className={`py-3 ${theme.text}`}>Name</th>
              <th className={`py-3 ${theme.text}`}>Description</th>
              <th className={`py-3 ${theme.text}`}>Fee ($)</th>
              <th className={`py-3 ${theme.text}`}>Branch</th>
              <th className={`py-3 ${theme.text}`}>Action</th>
            </tr>
          </thead>
          <tbody>
            {mockServices.map((service) => (
              <tr key={service.id} className={currentTheme === "dark" ? "border-b border-gray-700 hover:bg-gray-700" : "border-b hover:bg-gray-100"}>
                {/* <td className="py-3">{service.id}</td> */}
                <td className="py-3 font-semibold">{service.name}</td>
                <td className="py-3">{service.description}</td>
                <td className="py-3">{service.serviceFee}</td>
                <td className="py-3">{service.Branch?.name || "-"}</td>
                <td className="py-3 flex gap-3">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FiEdit size={18} />
                  </button>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FiTrash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Service Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
          <div className={`w-full max-w-md p-6 rounded-lg shadow-lg relative pointer-events-auto
            ${currentTheme === "dark" ? "bg-gray-800 border border-gray-600" : "bg-white border border-gray-300"}`}>
            <h2 className={`text-xl font-bold mb-4 ${theme.text}`}>Add New Service</h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Service Name"
                className="p-2 border rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Description"
                className="p-2 border rounded-md w-full"
              />
              <input
                type="number"
                placeholder="Service Fee"
                className="p-2 border rounded-md w-full"
              />
              <select className="p-2 border rounded-md w-full">
                <option>Select Branch</option>
                {mockServices.map((s) => (
                  <option key={s.Branch.id} value={s.Branch.id}>{s.Branch.name}</option>
                ))}
              </select>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-500 text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ServicePage;