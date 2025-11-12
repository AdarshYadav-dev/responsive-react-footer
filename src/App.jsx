import React from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-bold">Welcome to React with Tailwind Footer Example</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
