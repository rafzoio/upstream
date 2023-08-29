import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Settings from "./pages/Settings";
import store from "./redux/store";

function App() {
  return (
    <div className="flex flex-col min-h-screen font-karla">
      <Provider store={store}>
        <Router>
          <div className="w-full bg-slate-800 text-white">
            <Header />
          </div>

          <div className="flex-grow flex flex-row overflow-auto">
            <div className="bg-blue-900 text-white w-30">
              <Sidebar />
            </div>

            <div className="p-6 overflow-auto w-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
          <div className="w-full bg-slate-800 text-white">
            <Controls />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
