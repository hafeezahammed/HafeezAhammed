import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Mail, MapPin, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="glass-card p-8 hover:glow-border transition-all duration-300 group">
              <div className="w-full h-64 rounded-lg mb-6 flex items-center justify-center overflow-hidden bg-transparent">
                <motion.div
                  className="w-full h-full flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/assets/hafeez.png" 
                    alt="Hafeez Ahammed"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Hafeez Ahammed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate about creating innovative solutions and exploring the endless possibilities of technology.
                Member of the Coders Club, constantly learning and building.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <Card className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Date of Birth</h4>
                  <p className="text-muted-foreground">November 6, 2005</p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Shivamogga District, Bhadravathi Taluk
                  </p>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:hafeezahammed264@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hafeezahammed264@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <a
              href="https://thecodersclub.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="glass-card p-6 hover:glow-border transition-all duration-300 cursor-pointer">
              <div className="flex items-start gap-4">
                <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                <h4 className="font-semibold mb-1">Member of</h4>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-mono gradient-text">&lt;/&gt;</span>
                  <span className="text-muted-foreground">Coders Club</span>
                </div>
                </div>
              </div>
              </Card>
            </a>

            <div className="flex gap-4 pt-4">
              <Button
                size="lg"
                variant="outline"
                className="glass-card flex-1 hover:glow-border transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.instagram.com/hafeez_7724?igsh=dGdlc3gzZTh6NHA0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="glass-card flex-1 hover:glow-border transition-all duration-300"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/hafeez-ahammed-798a87379/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;