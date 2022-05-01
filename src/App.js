import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound/NotFound";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import InventoryItems from "./pages/InventoryItems/InventoryItems";
import Footer from "./pages/Shared/Footer/Footer";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>      
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/inventory" element={<InventoryItems/>}></Route>
        <Route path="/inventory/:id" element={<ManageInventory/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
