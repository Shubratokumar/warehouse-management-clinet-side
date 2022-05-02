import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFound from "./pages/NotFound/NotFound";
import ManageInventory from "./pages/ManageInventory/ManageInventory";
import InventoryItems from "./pages/InventoryItems/InventoryItems";
import Footer from "./pages/Shared/Footer/Footer";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import { Toaster } from "react-hot-toast";
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import UpdateItem from './pages/UpdateItem/UpdateItem';

function App() {
  return (
    <div>
      <Header/>
      <Toaster/>
      <Routes>      
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/inventory" element={<InventoryItems/>}></Route>
        <Route path="/inventory/:id" 
          element={
            <RequireAuth>
              <UpdateItem/>
            </RequireAuth>
          }
        ></Route>        
        <Route path="/manageinventory" element={<ManageInventory/>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path= "/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
