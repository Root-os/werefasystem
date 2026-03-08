import React, { useContext } from "react";
import ThemeContext from "../components/layout/ThemeContext";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Filter urgent appointments: VIP branches
const urgentAppointments = [
  {
    id: 1,
    Branch: {
      id: 14,
      name: "Kotebe Branch",
      location: "Kotebe, Addis Ababa",
      type: "VIP",
    },
    Service: { id: 1, name: "TIN Registration", serviceFee: "50.00" },
    AvailableTimeSlot: { type: "morning", time: "09:00:00", slots: 5 },
    User: {
      firstName: "Gnfsdghmg",
      middleName: "Jgythrgfsdasdfgh",
      phoneNumber: "0911000001",
    },
    appointmentFor: "self",
    status: "scheduled",
  },
  {
    id: 2,
    Branch: {
      id: 15,
      name: "Jemo Branch",
      location: "Jemo, Addis Ababa",
      type: "VIP",
    },
    Service: { id: 2, name: "VAT Registration", serviceFee: "75.00" },
    AvailableTimeSlot: { type: "afternoon", time: "13:00:00", slots: 3 },
    User: {
      firstName: "Yohi",
      middleName: "Mesfin",
      phoneNumber: "0912345678",
    },
    appointmentFor: "self",
    status: "completed",
  },
  {
    id: 5,
    Branch: {
      id: 18,
      name: "Tor Hailoch Branch",
      location: "Tor Hailoch, Addis Ababa",
      type: "VIP",
    },
    Service: { id: 4, name: "Tax Clearance Certificate", serviceFee: "120.00" },
    AvailableTimeSlot: { type: "afternoon", time: "14:00:00", slots: 2 },
    User: {
      firstName: "Lily",
      middleName: "Bekele",
      phoneNumber: "0911444555",
    },
    appointmentFor: "self",
    status: "scheduled",
  },
  {
    id: 7,
    Branch: {
      id: 20,
      name: "Bole Bulbula Branch",
      location: "Bole Bulbula, Addis Ababa",
      type: "VIP",
    },
    Service: { id: 3, name: "Tax Collection", serviceFee: "100.00" },
    AvailableTimeSlot: { type: "afternoon", time: "15:00:00", slots: 4 },
    User: { firstName: "Sara", middleName: "Abebe", phoneNumber: "0911666777" },
    appointmentFor: "self",
    status: "scheduled",
  },
];

const formatTime = (time24) => {
  const [hour, minute] = time24.split(":");
  let h = parseInt(hour, 10);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12; // convert 0 -> 12, 13 -> 1, etc.
  return `${h}:${minute} ${ampm}`;
};
const UrgentAppointmentsPage = () => {
  const { theme, currentTheme } = useContext(ThemeContext);

  const handleEdit = (id) => {
    console.log("Edit urgent appointment", id);
  };

  const handleDelete = (id) => {
    console.log("Delete urgent appointment", id);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`p-6 rounded-lg shadow ${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h1 className={`text-3xl font-bold ${theme.text}`}>
          Urgent Appointments
        </h1>
        <p
          className={
            currentTheme === "dark" ? "text-gray-300" : "text-gray-600"
          }
        >
          These appointments are urgent and require immediate attention.
        </p>
      </div>

      {/* Table */}
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
                    ? "border-b border-gray-700"
                    : "border-b"
                }
              >
                {/* <th className={`py-3 ${theme.text}`}>ID</th> */}
                <th className={`py-3 ${theme.text}`}>Branch</th>
                <th className={`py-3 ${theme.text}`}>Service</th>
                <th className={`py-3 ${theme.text}`}>User</th>
                <th className={`py-3 ${theme.text}`}>Time Slot</th>
                <th className={`py-3 ${theme.text}`}>Status</th>
                <th className={`py-3 ${theme.text}`}>Action</th>
              </tr>
            </thead>

            <tbody>
              {urgentAppointments.map((appt) => (
                <tr
                  key={appt.id}
                  className={`border-b ${
                    currentTheme === "dark"
                      ? "border-gray-700 hover:bg-gray-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* <td className="py-3 font-medium">{appt.id}</td> */}
                  <td className="py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-semibold ${
                        appt.Branch.type === "VIP"
                          ? "bg-green-100 text-green-800"
                          : currentTheme === "dark"
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {appt.Branch.name}
                    </span>
                    <div className="text-sm text-gray-500">
                      {appt.Branch.location}
                    </div>
                  </td>
                  <td className="py-3">
                    {appt.Service.name} (${appt.Service.serviceFee})
                  </td>
                  <td className="py-3">
                    {appt.User.firstName} {appt.User.middleName} <br />
                    <span className="text-sm text-gray-500">
                      {appt.User.phoneNumber}
                    </span>
                  </td>
                  <td className="py-3">
                    <div>
                      {appt.AvailableTimeSlot.type} -{" "}
                      {formatTime(appt.AvailableTimeSlot.time)}
                    </div>
                    <div className="text-green-600 font-semibold text-sm">
                      {appt.AvailableTimeSlot.slots} slots
                    </div>
                  </td>
                  <td className="py-3 capitalize">{appt.status}</td>
                  <td className="py-3 flex gap-3">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEdit(appt.id)}
                    >
                      <FiEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(appt.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
              {urgentAppointments.length === 0 && (
                <tr>
                  <td colSpan={7} className="py-6 text-center text-gray-500">
                    No urgent appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UrgentAppointmentsPage;
