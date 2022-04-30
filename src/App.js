import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>      
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
