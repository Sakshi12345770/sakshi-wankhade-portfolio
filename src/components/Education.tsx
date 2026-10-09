import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Sant Gadge Baba Amravati University",
    duration: "Completed",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "C. S. Kothari Junior College",
    duration: "Completed",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Kothari High School",
    duration: "Completed",
  },
];

const Education = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="education" className="py-20 sm:py-32 bg-secondary/30">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and educational journey.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="project-card p-6 flex gap-4"
            >
              {/* Icon */}
              <div className="shrink-0">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap size={24} />
                </div>
              </div>

              {/* Details */}
              <div>
                <h3 className="font-display text-lg sm:text-xl font-semibold mb-1">
                  {item.degree}
                </h3>

                <p className="text-muted-foreground mb-2">
                  {item.institution}
                </p>

                <span className="text-sm text-primary font-medium">
                  {item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;