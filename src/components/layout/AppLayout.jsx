import React, { useState } from "react";
import AppSidebar from "./Sidebar";
import Header from "./Header";

const AppLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AppSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;