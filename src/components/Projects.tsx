import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import WheelTheftCaseStudy from "./WheelTheftCaseStudy";

const projects = [
  {
    title: "Wanderlust",
    description:
      "A full-stack Airbnb clone where users can explore property listings, add properties, manage listings, and post reviews. The project includes authentication, authorization, search, maps, and image uploads.",
    image: "/project/wanderlust.png",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "Passport.js",
      "Cloudinary",
      "MapTiler",
    ],
    github: "https://github.com/Sakshi12345770/Wanderlust",
    live: "https://project-wanderlust-26ve.onrender.com/listings",
  },
  {
    title: "Wheel Theft Detection System",
    description:
      "An IoT-based security project designed to detect suspicious wheel movement. It uses Arduino, NodeMCU, IR sensors, HC-05 Bluetooth, and an Android application to control the security mode.",
    image: "/project/wheel-theft.jpeg",
    tech: [
      "Arduino",
      "NodeMCU",
      "IR Sensors",
      "HC-05",
      "Android Studio",
      "IoT",
    ],
    github: "",
    live: "",
  },
  {
    title: "Spotify Frontend Clone",
    description:
      "A frontend project inspired by Spotify, designed to practice modern web development and create a responsive music streaming interface.",
    image: "/project/spotify.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Sakshi12345770/spotify-frontend",
    live: "https://sakshi12345770.github.io/spotify-frontend/spotify.html",
  },
];

const Projects = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="section-container">

        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of the projects I have built while learning and applying
            software and web development technologies.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="project-card overflow-hidden flex flex-col"
            >
              {/* Project Image */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">

                {/* Project Title */}
                <h3 className="font-display text-xl font-bold mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="skill-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 mt-auto flex-wrap">

                  {/* Wheel Theft Case Study */}
                  {project.title === "Wheel Theft Detection System" ? (
                    <WheelTheftCaseStudy />
                  ) : (
                    <>
                      {/* GitHub Button */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline inline-flex items-center gap-2"
                        >
                          <Github size={16} />
                          GitHub
                        </a>
                      )}

                      {/* Live Demo Button */}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary inline-flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      )}
                    </>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;