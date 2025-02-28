import memojiImage from "../../public/assets/images/memoji-computer.png";
import myPhoto from "../../public/assets/images/myPhoto2.jpg";
import ArrowDown from "../../public/assets/icons/arrow-down.svg";
import grainImage from "../../public/assets/images/grain.jpg";
import Stars from "../utils/Stars";
import HeroRing from "../utils/HeroRing.jsx";

const HeroSection = () => {
  const handleScrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-white py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] ">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage})` }}
        ></div>

        <HeroRing />
        <Stars />
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <img
            src={memojiImage}
            className="size-[100px] mb-3 "
            alt="My Photo"
          ></img>

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full"></div>
            </div>
            <div className="font-mono text-sm font-medium">
              Available For New Projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Exceptional User Experiences
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I am Deepak Yadav, a passionate developer from Mumbai.<br></br>I
            specialize in transforming designs into functional, <br></br>{" "}
            high-performing web applications. Always eager to learn and grow!
            Let's discuss your next project.
          </p>
        </div>
        <div className="overflow-hidden flex flex-col md:flex-row justify-center items-center mt-6 gap-4">
          <button
            onClick={handleScrollToProjects}
            className="z-10 inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl"
          >
            <span className="font-semibold inset-0 transition-transform hover:scale-110">
              Explore My Work
            </span>
            <img className="size-4" src={ArrowDown} alt="arrow down"></img>
          </button>
          <button className="z-10 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span className="inset-0 transition-transform hover:scale-110">
              <a
                className="font-semibold"
                target="_blank"
                href="https://drive.google.com/file/d/1Q95vW9BI4mLBtL_spgoST5Xti8cOGu35/view?usp=drive_link"
              >
                📝 My Resume
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
