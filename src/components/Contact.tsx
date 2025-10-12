import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-center gradient-text">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Let's connect and build something amazing together!
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Email Card */}
            <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Email</h3>
                  <a
                    href="mailto:hafeezahammed264@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all"
                  >
                    hafeezahammed264@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Call</h3>
                  <a
                    href="tel:+919036765726"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    +91 90367 65726
                  </a>
                </div>
              </div>
            </Card>

            {/* Location Card */}
            <Card className="glass-card p-4 sm:p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Location</h3>
                  <p className="text-muted-foreground text-sm sm:text-base break-words">
                    Shivamogga District, Bhadravathi Taluk
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-6 sm:p-8 hover:glow-border transition-all duration-300 h-full flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 gradient-text text-center sm:text-left">
                Send a Message
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 text-center sm:text-left">
                Feel free to reach out! Whether it's about a project, collaboration, or just to say hi.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 glass-card hover:glow-border transition-all duration-300 py-3 sm:py-4"
                asChild
              >
                <a
                  href="mailto:hafeezahammed264@gmail.com"
                  className="flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Email
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 Hafeez Ahammed. Built with passion and code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;