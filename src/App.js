import './App.css';
import Main from "./pages/Main";
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Main/>
      <Outlet/>
    </div>
  );
}

export default App;
