
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { track } from "@vercel/analytics";
import AchievementBanner from "./AchievementBanner";

const Hero = () => {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center hero-glow pt-20 sm:pt-24">
      <div className="section-container py-8 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-4xl text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-display text-[clamp(1.6rem,6vw,3.5rem)] font-bold leading-[1.1] sm:mb-6"
          >
            Hello, I'm{" "}
            <span className="text-gradient">Sakshi Wankhade</span>

            <span className="mt-3 block text-[clamp(1.1rem,4vw,2.2rem)] leading-tight">
              Software Developer
            </span>

            <span className="mt-2 block text-[clamp(0.8rem,2.5vw,1.15rem)] font-medium text-muted-foreground">
              Full Stack • Web Development • React • Node.js
            </span>
          </motion.h1>

          {/* Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-6 max-w-2xl px-2 text-sm leading-6 text-white/85 sm:mb-8 sm:text-base sm:leading-7"
          >
           BCA graduate and aspiring Software Developer passionate about building reliable, user-friendly web applications. I enjoy developing practical projects, solving real-world problems, and continuously improving my technical and problem-solving skills. I’m eager to contribute to a professional team and grow as a software developer.

          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 flex flex-col items-center justify-center gap-3 sm:mb-10 sm:flex-row sm:gap-4"
          >
            <a
              href="#projects"
              className="btn-primary w-full text-center sm:w-auto sm:min-w-[160px]"
            >
              View My Work
            </a>

            <a
              href="/Sakshi-Wankhade-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("Resume Download", { location: "hero" })
              }
              className="btn-outline w-full text-center sm:w-auto sm:min-w-[160px]"
            >
              Get Resume
            </a>
          </motion.div>

          {/* Achievement Banner - Below the introduction and buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <AchievementBanner />
          </motion.div>

          {/* Available for Work Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1.5 sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
            <span className="text-xs text-muted-foreground sm:text-sm">
              Available for work
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="https://github.com/Sakshi12345770"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("Social Link Click", {
                  network: "github",
                  location: "hero",
                })
              }
              className="rounded-lg bg-secondary p-2.5 transition-colors hover:bg-primary hover:text-primary-foreground sm:p-3"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/sakshi-wankhade-977407361"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("Social Link Click", {
                  network: "linkedin",
                  location: "hero",
                })
              }
              className="rounded-lg bg-secondary p-2.5 transition-colors hover:bg-primary hover:text-primary-foreground sm:p-3"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=wankhadesakhshi2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track("Social Link Click", {
                  network: "email",
                  location: "hero",
                })
              }
              className="rounded-lg bg-secondary p-2.5 transition-colors hover:bg-primary hover:text-primary-foreground sm:p-3"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown size={22} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

