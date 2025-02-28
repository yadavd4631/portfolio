import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import bookImage from "../../public/assets/images/book1.png";
import javaScriptIcon from "../../public/assets/icons/javascript.png";
import HTML5Icon from "../../public/assets/icons/html.png";
import tailwindcssIcon from "../../public/assets/icons/tailwindcss.png";
import reactIcon from "../../public/assets/icons/react.png";
import DockerIcon from "../../public/assets/icons/docker.png";
import gitHubIcon from "../../public/assets/icons/github.png";
import mapImage from "../../public/assets/images/mumbaimap.png";
import smileMemoji from "../../public/assets/images/memoji-smile.png";
import CardHeader from "../components/CardHeader";
import ToolBoxItems from "../components/ToolBoxItem";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: javaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTML5Icon,
  },
  {
    title: "TailwindCSS",
    iconType: tailwindcssIcon,
  },
  {
    title: "React",
    iconType: reactIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Github",
    iconType: gitHubIcon,
  },
];

const hobbies = [
  {
    title: "Music",
    emoji: "🎶",
    left: "70%",
    top: "45%",
  },
  {
    title: "Movies",
    emoji: "🎬",
    left: "35%",
    top: "40%",
  },
  {
    title: "Cricket",
    emoji: "🏏",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Calisthenics",
    emoji: "🏋️‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

const About = () => {
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about me, what I do, and what inspires me."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* first Card */}
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 p-6">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-8">
                <a
                  href="https://gitapress.org/product/673f25be07174db38a587545"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={bookImage}
                    alt="Book Cover"
                    className="cursor-pointer hover:opacity-90 transition-opacity duration-200"
                  />
                </a>
              </div>
            </Card>

            {/* bg-gradient-to-r from-emerald-300 to-sky-400 */}
            {/* Second Card */}
            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I used to craft exceptional
                digital experiences."
                className="px-6 pt-6"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          {/* third Card */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my intersts and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* Fourth Card */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <img
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              ></img>
              <a
                href="https://maps.app.goo.gl/KWM69a2akWEpeDu88"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 cursor-pointer"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 cursor-pointer animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10 cursor-pointer"></div>
                <img
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                ></img>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
