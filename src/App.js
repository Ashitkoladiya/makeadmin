import { Route, Routes } from "react-router-dom";
import "./App.css";
import MiniDrawer from "./admin/mui/Mui";
import AddData from "./admin/addData/AddData";
import RemoveData from "./admin/removeData/RemoveData";
// import Header from "./container/header/header";

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <MiniDrawer /> */}
      <MiniDrawer>
        <Routes>
          {/* <Route path="/admin" element={<MiniDrawer />} /> */}
          <Route path="/adddata" element={<AddData />} />
          <Route path="/removedata" element={<RemoveData />} />
        </Routes>
      </MiniDrawer>
    </>
  );
}

export default App;
