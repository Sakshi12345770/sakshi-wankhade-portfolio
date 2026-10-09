import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Wrench, Server } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "C++", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js", "EJS"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Web Development",
    icon: Server,
    skills: [
      "REST APIs",
      "Authentication",
      "Authorization",
      "API Integration",
      "Responsive Design",
    ],
  },
  {
    title: "Core Concepts & IoT",
    icon: Code2,
    skills: [
      "Data Structures",
      "OOP",
      "Software Engineering",
      "Arduino",
      "IoT",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Visual Studio Code", "Postman"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="skills" className="py-20 sm:py-32 bg-secondary/30">
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
            My <span className="text-gradient">Skills</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications
            and practical software projects.
          </p>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="project-card p-6"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={24} />
                </div>

                <h3 className="font-display text-lg font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;