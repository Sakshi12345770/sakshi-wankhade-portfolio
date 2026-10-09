
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Send,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [isSending, setIsSending] = useState(false);

  const email = "wankhadesakhshi2004@gmail.com";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const senderEmail = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    )}`;

    setIsSending(true);
    window.location.href = mailtoLink;
    setIsSending(false);
  };

  return (
    <section id="contact" className="contact section py-20 sm:py-28">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="section-title mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Let's Connect
            </p>

            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Contact <span className="text-gradient">Me</span>
            </h2>
          </div>

          {/* Contact Container */}
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Contact Information */}
            <div className="contact-info">
              <h3 className="mb-4 text-2xl font-bold">
                Let's work together
              </h3>

              <p className="mb-8 leading-7 text-muted-foreground">
                I'm open to entry-level opportunities in software,
                web and application development. Feel free to connect
                with me!
              </p>

              {/* Email */}
              <a
                href={`mailto:${email}`}
                className="contact-item mb-5 flex items-center gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-primary/10"
              >
                <span className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block font-semibold">Email</span>
                  <span className="break-all text-sm text-muted-foreground">
                    {email}
                  </span>
                </span>
              </a>

              
{/* Phone */}
<a
  href="tel:8080298187"
  className="contact-item mb-5 flex items-center gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-primary/10"
>
  <span className="rounded-full bg-primary/10 p-3 text-primary">
    <Phone size={22} />
  </span>

  <span>
    <span className="block font-semibold">Phone</span>
    <span className="text-sm text-muted-foreground">
      8080298187
    </span>
  </span>
</a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/sakshi-wankhade-977407361"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item mb-5 flex items-center gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-primary/10"
              >
                <span className="rounded-full bg-primary/10 p-3 text-primary">
                  <Linkedin size={22} />
                </span>
                <span>
                  <span className="block font-semibold">LinkedIn</span>
                  <span className="text-sm text-muted-foreground">
                    LinkedIn Profile
                  </span>
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Sakshi12345770"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item flex items-center gap-4 rounded-xl bg-secondary/50 p-4 transition-colors hover:bg-primary/10"
              >
                <span className="rounded-full bg-primary/10 p-3 text-primary">
                  <Github size={22} />
                </span>
                <span>
                  <span className="block font-semibold">GitHub</span>
                  <span className="text-sm text-muted-foreground">
                    GitHub Profile
                  </span>
                </span>
              </a>
            </div>

            {/* Contact Form */}
            <form
              className="contact-form project-card space-y-5 rounded-2xl p-6 sm:p-8"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  aria-label="Your Name"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  aria-label="Your Email"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  aria-label="Subject"
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Your Message"
                  aria-label="Your Message"
                  required
                  className="w-full resize-y rounded-xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="btn-primary inline-flex items-center justify-center gap-2 px-7 py-3"
              >
                {isSending ? "Opening Email..." : "Send Message"}
                {isSending ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <Send size={18} />
                )}
              </button>

            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;