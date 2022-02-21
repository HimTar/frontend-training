import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BDaySort from "./pages/BDaySort";
import Convertor from "./pages/Convertor";
import DataTable from "./pages/DataTable";
import "./App.css";

const Home = (): JSX.Element => {
  return (
    <div>
      <h1>React Assignment</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <a href="/convertor">
            <button>Navigate to Currency Convertor</button>
          </a>
        </li>

        <li>
          <a href="/table">
            <button>Navigate to API Data Table</button>
          </a>
        </li>
        <li>
          <a href="/bdaysort">
            <button>Navigate to BDay Sort</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bdaysort" element={<BDaySort />} />
        <Route path="table" element={<DataTable />} />
        <Route path="convertor" element={<Convertor />} />
      </Routes>
    </Router>
  );
}

export default App;
