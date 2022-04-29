import { Route, Router } from "react-router-dom";
import Home from "./pages/Home/Home/Home";


function App() {
  return (
    <div>
      <Router>
        <Route path="/" element={<Home/>}></Route>
      </Router>
    </div>
  );
}

export default App;
