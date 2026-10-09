
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, FileText } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  preview: string;
  link: string;
  primaryActionLabel?: string;
};

const certificates: Certificate[] = [
  {
    title: "Foundation Course on Green Skills and Artificial Intelligence",
    issuer: "Edunet Foundation — Skills4Future Program",
    date: "October 2024",
    preview: "/certifications/ai-green-skills.png",
    link: "/certifications/ai-green-skills.pdf",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "Android with IoT Internship",
    issuer: "iBase Electrosoft LLP",
    date: "June 2025",
    preview: "/certifications/android-iot-internship.jpeg",
    link: "/certifications/android-iot-internship.jpeg",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM — Coursera",
    date: "June 2025",
    preview: "/certifications/python-data-science-ibm.png",
    link: "/certifications/python-data-science-ibm.pdf",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "Introduction to Python",
    issuer: "Infosys Springboard",
    date: "July 2025",
    preview: "/certifications/introduction-to-python.png",
    link: "/certifications/introduction-to-python.pdf",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "AI-first Software Engineering",
    issuer: "Infosys Springboard",
    date: "May 2025",
    preview: "/certifications/ai-first-software-engineering.png",
    link: "/certifications/ai-first-software-engineering.pdf",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "Cybersecurity",
    issuer: "Infosys Springboard",
    date: "June 2025",
    preview: "/certifications/cybersecurity.png",
    link: "/certifications/cybersecurity.pdf",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "Python Development Internship",
    issuer: "iBase Electrosoft LLP",
    date: "August 2025",
    preview: "/certifications/python-development-internship.png",
    link: "/certifications/python-development-internship.pdf",
    primaryActionLabel: "View Certificate",
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "Infosys Springboard",
    date: "July 2025",
    preview: "/certifications/introduction-to-cloud-computing.png",
    link: "/certifications/introduction-to-cloud-computing.pdf",
    primaryActionLabel: "View Certificate",
  },
 {
  title: "Employability Skill Training Programme",
  issuer: "Mahindra Pride Classroom — Naandi Foundation",
  date: "January 2026",
  preview: "/certifications/skill-traning.jpeg",
  link: "/certifications/skill-traning.jpeg",
  primaryActionLabel: "View Certificate",
},
  {
    title: "HR Workshop — Banking, Finance and Insurance",
    issuer: "SKILLSERV — Bajaj Finserv Limited",
    date: "February 2026",
    preview: "/certifications/hr-workshop.png",
    link: "/certifications/hr-workshop.pdf",
    primaryActionLabel: "View Certificate",
  },
];

const Certificates = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="certificates" className="py-16 sm:py-20">
      <div className="section-container">
        {/* Section Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            My Achievements
          </p>

          <h2 className="mb-3 font-display text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">
              Certificates &amp; Training
            </span>
          </h2>

          <p className="mx-auto max-w-xl text-sm text-muted-foreground sm:text-base">
            Certificates and training programs that reflect my learning and
            professional growth.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: (index % 3) * 0.12 }}
              className="project-card flex h-full min-w-0 flex-col overflow-hidden rounded-xl"
            >
              {/* Certificate Preview */}
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${certificate.title}`}
                className="flex h-[240px] w-full shrink-0 items-center justify-center overflow-hidden bg-white p-2 sm:h-[260px]"
              >
                <img
                  src={certificate.preview}
                  alt={`${certificate.title} certificate`}
                  loading="lazy"
                  className="block h-full w-full object-contain"
                  onError={(event) => {
                    const image = event.currentTarget;
                    image.style.display = "none";

                    const fallback = image.nextElementSibling;
                    if (fallback instanceof HTMLElement) {
                      fallback.style.display = "flex";
                    }
                  }}
                />

                <div className="hidden h-full w-full flex-col items-center justify-center gap-3 text-gray-700">
                  <FileText size={42} className="text-primary" />
                  <span className="text-center text-sm font-medium">
                    Preview unavailable
                  </span>
                  <span className="text-center text-xs">
                    Click View Certificate to open the file
                  </span>
                </div>
              </a>

              {/* Certificate Details */}
              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-center gap-2 text-primary">
                  <Award size={16} className="shrink-0" />
                  <span className="text-xs font-medium uppercase tracking-wide">
                    {certificate.date}
                  </span>
                </div>

                <div>
                  <h3 className="mb-2 font-display text-base font-semibold sm:text-lg">
                    {certificate.title}
                  </h3>

                  <p className="text-sm font-medium text-primary">
                    {certificate.issuer}
                  </p>
                </div>

                <div className="mt-auto pt-2">
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 text-sm"
                  >
                    <ExternalLink size={15} />
                    {certificate.primaryActionLabel ?? "View Certificate"}
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;