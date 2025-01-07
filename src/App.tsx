import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import "./App.css";

import Dashboard from "./components/dashboard";

const App = () => {
  return (
    <div className="root">
      <Dashboard />
    </div>
  );
};

export default App;
