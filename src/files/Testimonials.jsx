import memojiAvatar1 from "../../public/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "../../public/assets/images/praveen4.png";
import memojiAvatar3 from "../../public/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "../../public/assets/images/nilesh3.png";
import memojiAvatar5 from "../../public/assets/images/memoji-avatar-5.png";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Nilesh Mishra",
    position: "Data Analyst @ Fastenal India",
    text: "Deepak's mastery over intricate algorithms and his proficiency in leveraging advanced technologies like React and Node.js made him a linchpin in our digital transformation project. His ability to navigate complex datasets and produce actionable insights is truly commendable.",
    avatar: memojiAvatar4,
  },
  {
    name: "Kanhaiya Yadav",
    position: "Software Engineer @ Microsoft",
    text: "Collaborating with Deepak was an intellectual delight. His deftness in refactoring legacy codebases and implementing scalable microservices architecture using Node.js and Express.js showcased his unparalleled command over modern software paradigms.",
    avatar: memojiAvatar1,
  },
  {
    name: "Praveen Goswami",
    position: "Product Manager @ Google",
    text: "Deepak is a polymath in the tech domain, seamlessly blending his deep understanding of Machine Learning with an impeccable sense of user-centric design. His work on our CNN-based recommendation engine was transformative and set a new benchmark for our product.",
    avatar: memojiAvatar2,
  },
  {
    name: "Saurab Yadav",
    position: "CTO @ Startup X",
    text: "Deepak's innovative mindset and command over asynchronous programming with framework like React was pivotal in optimizing our application's performance. His solutions were not only elegant but also adhered strictly to industry best practices.",
    avatar: memojiAvatar3,
  },
  {
    name: "Divansh Pal",
    position: "UI/UX Designer @ Adobe",
    text: "Deepak's ability to integrate cutting-edge frontend technologies like TailwindCSS and EcmaScript with an exceptional eye for aesthetics turned our ideas into breathtaking, functional realities. His intuitive grasp of human-computer interaction principles was unparalleled.",
    avatar: memojiAvatar5,
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className="py-16 lg:py-24">
        <SectionHeader
          eyebrow="Happy Feedbacks"
          title="What They Say About Me"
          description="Don't just take my word for it. See whay they have to say about my work."
        />
        <div
          className="mt-16 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        ></img>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
