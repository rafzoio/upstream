import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Controls from "./components/Controls";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex h-screen bg-gray-200">
          <div className="w-full h-auto bg-gray-900 text-white fixed top-0">
            <Header />
          </div>
          <div className="w-full bg-gray-900 text-white fixed bottom-0">
            <Controls />
          </div>
          <div className="w-64 bg-gray-800 text-white p-5">
            <Sidebar />
          </div>

          <div className="flex-1 p-10">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
