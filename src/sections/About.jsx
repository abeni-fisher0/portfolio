import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hey, I’m Abeni</p>
            <p className="subtext">
              I’m a Mechanical Engineer at Addis Ababa University who found joy in writing clean, scalable code. I blend my engineering mindset with a passion for building smart web and mobile applications that solve real-world problems.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">ENGINEERED CODE</p>
            <Card style={{ rotate: "45deg", top: "30%", left: "10%" }} text="Problem Solving" containerRef={grid2Container} />
            <Card style={{ rotate: "-20deg", top: "60%", left: "50%" }} text="Efficiency" containerRef={grid2Container} />
            <Card style={{ rotate: "15deg", bottom: "30%", left: "75%" }} text="Systems Thinking" containerRef={grid2Container} />
            <Card style={{ rotate: "-35deg", top: "50%", left: "0%" }} text="Scalability" containerRef={grid2Container} />
            <Card style={{ rotate: "10deg", top: "10%", left: "38%" }} text="Flutter" containerRef={grid2Container} />
            <Card style={{ rotate: "30deg", top: "70%", left: "70%" }} image="assets/logos/javascript.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-45deg", top: "70%", left: "25%" }} image="assets/logos/mongodb.png" containerRef={grid2Container} />
            <Card style={{ rotate: "-15deg", top: "5%", left: "10%" }} image="assets/logos/nodejs.png" containerRef={grid2Container} />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Based in Ethiopia</p>
            <p className="subtext">Working globally, coding locally — I’m open to remote dev roles anywhere in the world.</p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Have a project idea or role for me?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I work across the stack — from MongoDB to Flutter, Node.js to React — with a no-BS attitude and pixel-perfect obsession.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
