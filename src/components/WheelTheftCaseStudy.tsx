import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, Cpu, Bluetooth, Smartphone, Zap } from "lucide-react";

const WheelTheftCaseStudy = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* View Case Study Button */}
      <button
        onClick={() => setOpen(true)}
        className="btn-outline inline-flex items-center gap-2"
      >
        <ShieldCheck size={16} />
        View Case Study
      </button>

      {/* Case Study Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-background border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-10 p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Close case study"
              >
                <X size={20} />
              </button>

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-8 pr-10">
                  <p className="text-sm text-primary font-medium mb-2">
                    Academic Group Project
                  </p>

                  <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                    Wheel Theft Detection System
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    An IoT-based security system designed to detect suspicious
                    wheel movement and provide a simple way to control the
                    vehicle security mode.
                  </p>
                </div>

                {/* Problem */}
                <div className="mb-7">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Problem
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Vehicle wheels can be vulnerable to unauthorized movement
                    or theft. The goal of this project was to create a system
                    that could detect suspicious wheel movement and alert the
                    user.
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-7">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    Solution
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    We developed an IoT-based system using IR sensors to detect
                    wheel movement. The sensor input is processed by the
                    controller, and repeated suspicious activity activates an
                    LED and buzzer.
                  </p>
                </div>

                {/* How It Works */}
                <div className="mb-7">
                  <h3 className="font-display text-lg font-semibold mb-4">
                    How It Works
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="project-card p-4">
                      <Cpu className="text-primary mb-3" size={22} />
                      <h4 className="font-semibold mb-1">
                        1. Movement Detection
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        IR sensors detect suspicious wheel movement.
                      </p>
                    </div>

                    <div className="project-card p-4">
                      <Zap className="text-primary mb-3" size={22} />
                      <h4 className="font-semibold mb-1">
                        2. Alert System
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        After repeated suspicious activity, the LED and buzzer
                        are activated.
                      </p>
                    </div>

                    <div className="project-card p-4">
                      <Bluetooth className="text-primary mb-3" size={22} />
                      <h4 className="font-semibold mb-1">
                        3. Bluetooth Communication
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        HC-05 Bluetooth is used for communication between the
                        hardware and Android application.
                      </p>
                    </div>

                    <div className="project-card p-4">
                      <Smartphone className="text-primary mb-3" size={22} />
                      <h4 className="font-semibold mb-1">
                        4. Android Control
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        The Android application allows the user to turn the
                        security mode ON or OFF.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-7">
                  <h3 className="font-display text-lg font-semibold mb-3">
                    Technologies Used
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Arduino",
                      "NodeMCU",
                      "IR Sensors",
                      "HC-05",
                      "Android Studio",
                      "IoT",
                    ].map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* My Role */}
                <div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    My Role
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    I worked on the development and implementation of the
                    project, including hardware integration, sensor testing,
                    Bluetooth communication, and overall system testing.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WheelTheftCaseStudy;