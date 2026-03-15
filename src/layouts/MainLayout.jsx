import { Outlet } from "react-router-dom";
import HomepageNavbar from "../components/HomepageNavbar";

function MainLayout() {
  return (
    <>
      <div className="bg-[#180A3C] min-h-screen">
        <HomepageNavbar />

        <Outlet/>
      </div>
    </>
  );
}

export default MainLayout;
