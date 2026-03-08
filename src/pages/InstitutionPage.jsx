import React, { useContext, useState } from "react";
import ThemeContext from "../components/layout/ThemeContext";
import { FiPlus, FiEdit, FiTrash2, FiX } from "react-icons/fi";

const initialData = [
  {
            "id": 7,
            "name": "Ministry of Health",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@moh.gov.et",
            "contact_phone": "+251911123304",
            "image": null,
            "createdAt": "2026-03-05T08:34:21.000Z",
            "updatedAt": "2026-03-05T08:34:21.000Z"
        },
        {
            "id": 8,
            "name": "Ministry of Revenues",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@mor.gov.et",
            "contact_phone": "+251911123303",
            "image": null,
            "createdAt": "2026-03-05T08:34:26.000Z",
            "updatedAt": "2026-03-05T08:34:26.000Z"
        },
        {
            "id": 9,
            "name": "Addis Ababa City Administration",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@aaca.gov.et",
            "contact_phone": "+251911123302",
            "image": null,
            "createdAt": "2026-03-05T08:34:34.000Z",
            "updatedAt": "2026-03-05T08:34:34.000Z"
        },
        {
            "id": 10,
            "name": "Berhanena Selam Printing Enterprise",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@berhanenaselam.gov.et",
            "contact_phone": "+251911123301",
            "image": null,
            "createdAt": "2026-03-05T08:34:39.000Z",
            "updatedAt": "2026-03-05T08:34:39.000Z"
        },
        {
            "id": 11,
            "name": "Ministry of Labor and Skills",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@mols.gov.et",
            "contact_phone": "+251911123317",
            "image": null,
            "createdAt": "2026-03-05T08:35:25.000Z",
            "updatedAt": "2026-03-05T08:35:25.000Z"
        },
        {
            "id": 12,
            "name": "Information Network Security Administration",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@insa.gov.et",
            "contact_phone": "+251911123316",
            "image": null,
            "createdAt": "2026-03-05T08:35:31.000Z",
            "updatedAt": "2026-03-05T08:35:31.000Z"
        },
        {
            "id": 13,
            "name": "Federal Courts of Ethiopia",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@federalcourts.gov.et",
            "contact_phone": "+251911123315",
            "image": null,
            "createdAt": "2026-03-05T08:35:39.000Z",
            "updatedAt": "2026-03-05T08:35:39.000Z"
        },
        {
            "id": 14,
            "name": "Addis Ababa Water and Sewerage Authority",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@aawsa.gov.et",
            "contact_phone": "+251911123314",
            "image": null,
            "createdAt": "2026-03-05T08:35:44.000Z",
            "updatedAt": "2026-03-05T08:35:44.000Z"
        },
        {
            "id": 15,
            "name": "Ministry of Trade and Regional Integration",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@motri.gov.et",
            "contact_phone": "+251911123313",
            "image": null,
            "createdAt": "2026-03-05T08:35:52.000Z",
            "updatedAt": "2026-03-05T08:35:52.000Z"
        },
        {
            "id": 16,
            "name": "Ethiopian Investment Commission",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@eic.gov.et",
            "contact_phone": "+251911123312",
            "image": null,
            "createdAt": "2026-03-05T08:35:58.000Z",
            "updatedAt": "2026-03-05T08:35:58.000Z"
        },
        {
            "id": 17,
            "name": "Ethiopian Customs Commission",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@ecc.gov.et",
            "contact_phone": "+251911123311",
            "image": null,
            "createdAt": "2026-03-05T08:39:40.000Z",
            "updatedAt": "2026-03-05T08:39:40.000Z"
        },
        {
            "id": 18,
            "name": "Addis Ababa Transport Bureau",
            "address": "Addis Ababa, Ethiopia",
            "contact_email": "info@aatb.gov.et",
            "contact_phone": "+251911123310",
            "image": null,
            "createdAt": "2026-03-05T08:39:49.000Z",
            "updatedAt": "2026-03-05T08:39:49.000Z"
        }
];

const InstitutionPage = () => {
  const { theme, currentTheme } = useContext(ThemeContext);

  const [institutions, setInstitutions] = useState(initialData);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    address: "",
    contact_email: "",
    contact_phone: "",
  });

  const handleAdd = () => {
    const newInstitution = {
      id: institutions.length + 1,
      ...form,
    };

    setInstitutions([...institutions, newInstitution]);

    setForm({
      name: "",
      address: "",
      contact_email: "",
      contact_phone: "",
    });

    setShowModal(false);
  };

  const handleDelete = (id) => {
    setInstitutions(institutions.filter((inst) => inst.id !== id));
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
          <h1 className={`text-2xl font-bold ${theme.text}`}>
            Institutions
          </h1>
          <p
            className={
              currentTheme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }
          >
            Manage registered institutions
          </p>
        </div>

        {/* Add Button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          <FiPlus />
          Add Institution
        </button>
      </div>

      {/* Table */}
      <div
        className={`p-6 rounded-lg shadow ${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="overflow-x-auto">

          <table className="w-full">

            {/* Table Head */}
            <thead>
              <tr
                className={
                  currentTheme === "dark"
                    ? "border-b border-gray-700 text-gray-300"
                    : "border-b text-gray-600"
                }
              >
                <th className="py-3 text-left">Logo</th>
                <th className="py-3 text-left">Name</th>
                <th className="py-3 text-left">Address</th>
                <th className="py-3 text-left">Email</th>
                <th className="py-3 text-left">Phone</th>
                <th className="py-3 text-left">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {institutions.map((inst) => (
                <tr
                  key={inst.id}
                  className={`border-b ${
                    currentTheme === "dark"
                      ? "border-gray-700 hover:bg-gray-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* Logo */}
                  <td className="py-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold">
                      {inst.name.charAt(0)}
                    </div>
                  </td>

                  <td className="py-3 font-medium">{inst.name}</td>
                  <td className="py-3">{inst.address}</td>
                  <td className="py-3">{inst.contact_email}</td>
                  <td className="py-3">{inst.contact_phone}</td>

                  {/* Actions */}
                  <td className="py-3 flex gap-3">

                    <button className="text-blue-500 hover:text-blue-700">
                      <FiEdit />
                    </button>

                    <button
                      onClick={() => handleDelete(inst.id)}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">

          <div
            className={`w-full max-w-md p-6 rounded-lg shadow-lg ${
              currentTheme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-xl font-semibold ${theme.text}`}>
                Add Institution
              </h2>

              <button onClick={() => setShowModal(false)}>
                <FiX />
              </button>
            </div>

            {/* Form */}
            <div className="space-y-3">

              <input
                type="text"
                placeholder="Institution Name"
                className="w-full border rounded-lg p-2"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Address"
                className="w-full border rounded-lg p-2"
                value={form.address}
                onChange={(e) =>
                  setForm({ ...form, address: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-2"
                value={form.contact_email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    contact_email: e.target.value,
                  })
                }
              />

              <input
                type="text"
                placeholder="Phone"
                className="w-full border rounded-lg p-2"
                value={form.contact_phone}
                onChange={(e) =>
                  setForm({
                    ...form,
                    contact_phone: e.target.value,
                  })
                }
              />

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-3">

                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={handleAdd}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg"
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

export default InstitutionPage;