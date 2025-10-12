import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

const Education = () => {
  const educationData = {
    degree: "BCA (Bachelor of Computer Applications)",
    college: "Sir MV Science College, Bhadravathi",
    university: "Kuvempu University, Bommanakatte, Bhadravathi – 577301",
  };

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text mb-4">
            Education
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass-card p-4 sm:p-6 md:p-8 hover:glow-border transition-all duration-300 relative overflow-hidden group">
            {/* Animated Background Blob */}
            <motion.div
              className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 relative z-10">
              {/* Icon Container */}
              <motion.div
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-card flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </motion.div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 gradient-text">
                  {educationData.degree}
                </h3>

                <div className="space-y-3 sm:space-y-4">
                  {/* College Info */}
                  <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 justify-center sm:justify-start flex-shrink-0">
                      <School className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                      <span className="font-semibold text-sm sm:text-base">College</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-muted-foreground text-sm sm:text-base break-words">
                        {educationData.college}
                      </p>
                    </div>
                  </div>

                  {/* University Info */}
                  <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 justify-center sm:justify-start flex-shrink-0">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      <span className="font-semibold text-sm sm:text-base">University</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-muted-foreground text-sm sm:text-base break-words">
                        {educationData.university}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Mobile Optimization - Progress Indicator */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-cosmic sm:hidden"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </Card>
        </motion.div>

        {/* Additional Info for Larger Screens */}
        <motion.div
          className="hidden sm:block text-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            Pursuing excellence in computer applications and software development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;