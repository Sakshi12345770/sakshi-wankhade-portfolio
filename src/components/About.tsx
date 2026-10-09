
import { motion } from "framer-motion";
import sakshiImage from "./sakshi.png.jpeg";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-primary">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            About <span className="text-orange-400">Me</span>
          </h2>
        </motion.div>

        {/* Image Left + Text Right */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center md:-translate-y-6"
          >
            <div className="relative flex items-center justify-center">
              {/* Orange Glow */}
              <div className="absolute h-64 w-64 rounded-full bg-orange-500/20 blur-[50px] sm:h-80 sm:w-80" />

              {/* Image Border */}
              <div className="relative rounded-full border-2 border-orange-400/80 p-2 shadow-[0_0_12px_rgba(249,115,22,0.9),0_0_30px_rgba(249,115,22,0.6)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,1),0_0_20px_rgba(249,115,22,0.8)]">
                <img
                  src={sakshiImage}
                  alt="Sakshi Wankhade"
                  className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72"
                />
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full text-center md:-translate-y-6"
          >
            <h3 className="mb-5 text-2xl font-bold text-white sm:text-3xl">
              Software Developer{" "}
              <span className="text-orange-400">&amp; BCA Graduate</span>
            </h3>

            <p className="mb-5 text-base leading-8 text-white sm:text-lg">
              I'm Sakshi Wankhade, a passionate BCA graduate with a strong
              interest in software development, web development, and backend
              technologies.
            </p>

            <p className="mb-5 text-base leading-8 text-white/95 sm:text-lg">
              My skills include Java, Python, C, C++, JavaScript, React.js,
              Node.js, Express.js, HTML, CSS, MongoDB, and SQL.
            </p>

            <p className="text-base leading-8 text-white/95 sm:text-lg">
              I am a quick learner, dedicated, and eager to begin my career as a
              Software Developer while contributing to impactful projects and
              growing professionally.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;