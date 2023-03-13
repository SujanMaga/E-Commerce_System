import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="other">other </div>
      </div>
    </div>
  );
}

export default App;
