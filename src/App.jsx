import React from "react";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold mb-2">Card 1</h2>
          <p className="text-gray-600">Some quick example content.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold mb-2">Card 2</h2>
          <p className="text-gray-600">Some quick example content.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-lg font-semibold mb-2">Card 3</h2>
          <p className="text-gray-600">Some quick example content.</p>
        </div>
      </div>
    </AppLayout>
  );
};

export default App;