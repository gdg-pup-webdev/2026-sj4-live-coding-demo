import HomepageNavbar from "../components/HomepageNavbar";

import sparkyImage from "../assets/sparky-nobg.png";
import { Link } from "react-router-dom";

const students = [
  {
    name: "Sparky Batumbakal",
    image: sparkyImage,
    link: "/students/sparky-page",
  },
  {
    name: "Erwin Daguinotas",
    image: sparkyImage,
    link: "/students/erwin",
  },
  {
    name: "Sparky Batumbakal",
    image: sparkyImage,
    link: "/students/sparky-page",
  },
  {
    name: "Sparky Batumbakal",
    image: sparkyImage,
    link: "/students/sparky-page",
  },
];

function Homepage() {
  return (
    <>
      <div className="w-full ">
        <div className="max-w-6xl mx-auto w-full flex flex-row gap-4 py-36 items-center">
          <div className="  w-full flex flex-col gap-4">
            <div className="text-6xl font-semibold text-white">
              Share Your Links.
            </div>
            <div className="text-6xl font-semibold text-[#E4BA23]">
              Show Your work.
            </div>
            <div className="text-sm font-semibold text-white">
              Flex all your projects, socials, works, and portfolios
            </div>
            <div className="text-white bg-[#E4BA23] p-4 py-2 mt-4 w-fit rounded-2xl ">
              Explore Gallery
            </div>
          </div>

          <div className=" w-full flex flex-row justify-center items-center">
            <img src={sparkyImage}></img>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="max-w-6xl mx-auto w-full flex flex-col gap-4 py-36 items-center text-white">
          <div className="text-3xl font-semibold">Student Galleries</div>
          <div>Discover student pages and see how they showcase their work</div>

          <div className="w-full grid grid-cols-3 gap-3">
            {students.map((student, index) => {
              return (
                <>
                  <div className="bg-[#261647] p-6 rounded-2xl flex-col flex gap-4 items-center">
                    <div className="bg-black rounded-full  w-10 aspect-square overflow-clip">
                      <img
                        className="w-10 aspect-square rounded-full"
                        src={student.image}
                      ></img>
                    </div>
                    <div>{student.name}</div>

                    <Link to={student.link}>
                      <div className="mt-4 opacity-50">View links</div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
