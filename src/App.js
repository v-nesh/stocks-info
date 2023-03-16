import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import StockData from "./components/dataList/StockData";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/stock-data" element={<StockData />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
