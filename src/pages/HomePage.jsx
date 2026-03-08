import React, { useContext } from "react";
import ThemeContext from "../components/layout/ThemeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { FiClock } from "react-icons/fi";

// Mock summary data
const dashboardStats = {
  institutions: 5,
  branches: 10,
  services: 8,
  users: 15,
  appointments: 20,
};

// Mock charts data
const branchData = [
  { name: "Kotebe Branch", appointments: 5 },
  { name: "Jemo Branch", appointments: 4 },
  { name: "Gotera Branch", appointments: 3 },
  { name: "Lideta Branch", appointments: 2 },
  { name: "Tor Hailoch Branch", appointments: 6 },
];

const serviceData = [
  { name: "TIN Registration", count: 8 },
  { name: "VAT Registration", count: 5 },
  { name: "Tax Collection", count: 4 },
  { name: "Tax Clearance Certificate", count: 3 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Mock recent appointments
const recentAppointments = [
  {
    id: 1,
    user: "John Doe",
    branch: "Kotebe Branch",
    service: "TIN Registration",
    time: "03:00 AM",
    status: "scheduled",
  },
  {
    id: 2,
    user: "Jane Smith",
    branch: "Jemo Branch",
    service: "VAT Registration",
    time: "10:00 AM",
    status: "completed",
  },
  {
    id: 3,
    user: "Ali Ahmed",
    branch: "Gotera Branch",
    service: "Tax Collection",
    time: "01:00 PM",
    status: "scheduled",
  },
  {
    id: 4,
    user: "Mary Johnson",
    branch: "Lideta Branch",
    service: "Tax Clearance Certificate",
    time: "11:00 AM",
    status: "cancelled",
  },
];

const HomePage = () => {
  const { theme, currentTheme } = useContext(ThemeContext);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div
        className={`${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        } p-6 rounded-lg shadow`}
      >
        <h1 className={`text-3xl font-bold mb-2 ${theme.text}`}>Dashboard</h1>
        <p className={currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}>
          Overview of key metrics and analytics.
        </p>
      </div>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(dashboardStats).map(([key, value]) => (
          <div
            key={key}
            className={`${
              currentTheme === "dark" ? "bg-gray-800" : "bg-white"
            } p-6 rounded-lg shadow border-l-4 ${theme.primary}`}
          >
            <h3 className={`text-xl font-semibold mb-2 ${theme.text}`}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </h3>
            <p className={currentTheme === "dark" ? "text-gray-300" : "text-gray-600"}>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Branch Appointments Bar Chart */}
        <div
          className={`${
            currentTheme === "dark" ? "bg-gray-800" : "bg-white"
          } p-6 rounded-lg shadow`}
        >
          <h3 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Appointments per Branch
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={branchData}
              margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={currentTheme === "dark" ? "#555" : "#ccc"}
              />
              <XAxis dataKey="name" stroke={currentTheme === "dark" ? "#fff" : "#000"} />
              <YAxis stroke={currentTheme === "dark" ? "#fff" : "#000"} />
              <Tooltip />
              <Legend />
              <Bar dataKey="appointments" fill="#4ade80" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution Pie Chart */}
        <div
          className={`${
            currentTheme === "dark" ? "bg-gray-800" : "bg-white"
          } p-6 rounded-lg shadow`}
        >
          <h3 className={`text-xl font-semibold mb-4 ${theme.text}`}>
            Services Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceData}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {serviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Appointments */}
      <div
        className={`${
          currentTheme === "dark" ? "bg-gray-800" : "bg-white"
        } p-6 rounded-lg shadow`}
      >
        <h3 className={`text-xl font-semibold mb-4 ${theme.text}`}>Recent Appointments</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">User</th>
                <th className="text-left p-3">Branch</th>
                <th className="text-left p-3">Service</th>
                <th className="text-left p-3">Time</th>
                <th className="text-left p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map((appt) => (
                <tr
                  key={appt.id}
                  className={`border-b ${
                    currentTheme === "dark" ? "border-gray-700" : "border-gray-200"
                  }`}
                >
                  <td className="p-3">{appt.user}</td>
                  <td className="p-3">{appt.branch}</td>
                  <td className="p-3">{appt.service}</td>
                  <td className="p-3 flex items-center gap-1">
                    <FiClock /> {appt.time}
                  </td>
                  <td
                    className={`p-3 font-semibold ${
                      appt.status === "scheduled"
                        ? "text-yellow-500"
                        : appt.status === "completed"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {appt.status.charAt(0).toUpperCase() + appt.status.slice(1)}
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

export default HomePage;