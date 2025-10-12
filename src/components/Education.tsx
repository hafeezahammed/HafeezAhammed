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
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center gradient-text">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="glass-card p-8 hover:glow-border transition-all duration-300 relative overflow-hidden group">
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            <div className="flex items-start gap-6 relative z-10">
              <motion.div
                className="w-16 h-16 rounded-full glass-card flex items-center justify-center flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <GraduationCap className="w-8 h-8 text-primary" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {educationData.degree}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <School className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">College</p>
                      <p className="text-muted-foreground">{educationData.college}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">University</p>
                      <p className="text-muted-foreground">{educationData.university}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
