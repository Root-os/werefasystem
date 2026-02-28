import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;