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
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text mb-4">
            About Me
          </h2>
          <p className="text-center text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Passionate developer creating innovative solutions and exploring technology
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {/* Profile Card */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <Card className="glass-card p-4 sm:p-6 md:p-8 hover:glow-border transition-all duration-300 group flex-1">
              {/* Responsive Image Wrapper */}
              <div className="relative w-full aspect-[4/3] rounded-3xl sm:rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden mb-4 sm:mb-6">
                <motion.img
                  src="/assets/hafeez.png"
                  alt="Hafeez Ahammed"
                  className="absolute inset-0 w-full h-full object-cover"
                  // objectPosition moves the image downward so the top (hair) is visible.
                  style={{ objectPosition: "50% 20%" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text text-center sm:text-left">
                Hafeez Ahammed
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-center sm:text-left">
                Passionate about creating innovative solutions and exploring the endless possibilities of technology.
                Member of the Coders Club, constantly learning and building.
              </p>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            {/* Date of Birth */}
            <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 truncate">
                    Date of Birth
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    November 6, 2005
                  </p>
                </div>
              </div>
            </Card>

            {/* Location */}
            <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 truncate">
                    Location
                  </h4>
                  <p className="text-muted-foreground text-sm sm:text-base break-words">
                    Shivamogga District, Bhadravathi Taluk
                  </p>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm sm:text-base mb-1 truncate">
                    Email
                  </h4>
                  <a
                    href="mailto:hafeezahammed264@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                  >
                    hafeezahammed264@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Coders Club */}
            <a
              href="https://thecodersclub.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                    <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-sm sm:text-base mb-1">
                      Member of
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-mono gradient-text">
                        &lt;/&gt;
                      </span>
                      <span className="text-muted-foreground text-sm sm:text-base">
                        Coders Club
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            </a>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              {/* Instagram */}
              <Button
                size="lg"
                variant="outline"
                className="glass-card flex-1 hover:glow-border transition-all duration-300 py-3 sm:py-4"
                asChild
              >
                <a
                  href="https://www.instagram.com/hafeez_7724?igsh=dGdlc3gzZTh6NHA0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  Instagram
                </a>
              </Button>

              {/* LinkedIn - updated */}
              <Button
                size="lg"
                variant="outline"
                className="glass-card flex-1 hover:bg-blue-500 hover:text-white active:bg-blue-600 active:text-white hover:glow-border transition-all duration-300 py-3 sm:py-4"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/hafeez-ahammed-798a87379/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 transition-colors group-hover:text-white" />
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
