import erwinImage from "../assets/erwin-image.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import LinkButton from "../components/LinkButton";
import { FaYoutube } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

function ErwinPage() {
  return (
    <>
      <div className=" flex flex-col items-center gap-4 p-4">
        <div className="max-w-sm flex flex-col items-center gap-4 text-center">
          <div className="w-30 h-30 rounded-full overflow-clip mt-16">
            <img src={erwinImage}></img>
          </div>

          <div className="font-semibold text-2xl text-white">
            Erwin Daguinotas
          </div>

          <div className="text-white">
            Web Developer | Student | UIUX Designer Frontend Developer | Backend
            Developer
          </div>

          <div className=" flex gap-4 text-white">
            <div className="w-7 h-7 rounded-full flex justify-center items-center text-5xl">
              <FaFacebook />
            </div>
            <div className="w-7 h-7 rounded-full flex justify-center items-center text-5xl">
              <FaInstagramSquare />
            </div>
            <div className="w-7 h-7 rounded-full flex justify-center items-center text-5xl">
              <FaLinkedin />
            </div>
          </div>

          <LinkButton>
            <div className=" text-4xl">
              <FaGithub />
            </div>
            <div className=" text-2xl">Github</div>
          </LinkButton>

          <LinkButton>
            <div className=" text-4xl">
              <FaYoutube />
            </div>
            <div className=" text-2xl">Youtube</div>
          </LinkButton>

          <LinkButton>
            <div className=" text-4xl">
              <FaTwitch />
            </div>
            <div className=" text-2xl">Twitch</div>
          </LinkButton>
        </div>
      </div>
    </>
  );
}

export default ErwinPage;
