import Navbar from "../components/Navbar";

import background from "../assets/background.jpg";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";


function SparkyPortfolio() {
    return <div className="w-full bg-black/20 min-h-screen">
        
        <MainBody />
        <Footer />

        <div className="fixed -z-10 w-full h-screen top-0 ">
          <img className="w-full h-full object-cover" src={background}></img>
        </div>
      </div>
}


export default SparkyPortfolio;