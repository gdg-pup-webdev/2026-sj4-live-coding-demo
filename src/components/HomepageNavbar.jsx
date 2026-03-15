import NavigationButton from "./NavigationButton";
import { Link } from "react-router-dom";

function HomepageNavbar() {
  return (
    <>
      <div className=" p-4   bg-[#2E244E] text-white font-semibold  ">
        <div className="flex flex-row justify-between max-w-6xl mx-auto">
          <Link to="/">
            <div>GDG Links</div>
          </Link>
          <div className="flex flex-row gap-4">
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/#gallery">
              <div>Gallery</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageNavbar;
