import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>      
        <Route path="/" element={<Home/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
