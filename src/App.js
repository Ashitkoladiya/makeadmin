import { Route, Routes } from "react-router-dom";
import "./App.css";
import MiniDrawer from "./admin/mui/Mui";
import AddData from "./admin/addData/AddData";
import RemoveData from "./admin/removeData/RemoveData";
import Dashboard from "./admin/dashboard/Dashboard";
import Home from "./container/Home/Home";
// import Header from "./container/header/header";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <MiniDrawer /> */}
      {/* <MiniDrawer> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/adddata" element={<AddData />} />
        <Route path="/admin/removedata" element={<RemoveData />} />
      </Routes>
      {/* </MiniDrawer> */}
    </>
  );
}

export default App;
