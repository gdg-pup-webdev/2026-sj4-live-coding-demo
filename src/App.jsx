import { Routes, Route } from "react-router-dom";
import SparkyPortfolio from "./pages/SparkyPortfolio";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import ErwinPage from "./pages/ErwinPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="about" element={<div>this is the about page</div>} />
          <Route path="students">
            <Route path="sparky-page" element={<SparkyPortfolio />} />
            <Route path="erwin" element={<ErwinPage/>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
