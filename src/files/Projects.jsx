import React from "react";
import netflixGPT from "../../public/assets/images/NetflixGPT.png";
import weather from "../../public/assets/images/weather-app.png";
import cal from "../../public/assets/images/cal.png";
import checkCircleIcon from "../../public/assets/icons/check-circle.svg";
import arrowUpRightIcon from "../../public/assets/icons/arrow-up-right-project.svg";
import Card from "../components/Card";

const portfolioProjects = [
  {
    company: "Netflix",
    year: "2025",
    title: "Netflix with GPT in Built",
    results: [
      { title: "Added Built in AI Model for Movie Suggetion" },
      { title: "Multiple Language Support" },
      { title: "Responsive & Optimized for mobile" },
    ],
    link: "https://netflix-gpt-68fdf.web.app/",
    image: netflixGPT,
  },
  {
    company: "JavaScript Calculator UI & Logic",
    year: "2024",
    title: "User-Friendly UI – Clean and intuitive design using HTML & CSS.",
    results: [
      {
        title:
          "Basic Arithmetic Operations – Supports addition, subtraction, multiplication, and division",
      },
      { title: "Responsive Design – Works on all screen sizes." },
      {
        title: "Keyboard Support – Perform calculations using the keyboard",
      },
    ],
    link: "https://simpecalcultor.netlify.app/",
    image: cal,
  },
  {
    company: "weather",
    year: "2024",
    title: " HTML5, CSS3, JavaScript WeatherMap API",
    results: [
      {
        title:
          "Real-time Weather Updates: Users receive accurate and up-to-date weather information based on their current location",
      },
      { title: "Responsive design" },
      { title: "highlighting a user-friendly design and layout." },
    ],
    link: "https://comfy-genie-2205db.netlify.app/",
    image: weather,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center text-lg ">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-lg text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences.
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 50}px`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5 " />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm/50 md:text-base/50 text-white/50">
                        <img
                          src={checkCircleIcon}
                          className="size-5 md:size-6 opacity-50"
                        ></img>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank">
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span className="font-bold">Visit Live Site</span>
                      <img src={arrowUpRightIcon} className="size-4"></img>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mt-8 rounded-xl -mb-4 md:-mb-0 md:rounded-t-lg md:rounded-b-none lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  ></img>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
