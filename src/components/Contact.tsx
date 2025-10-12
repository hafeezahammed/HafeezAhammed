import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-text">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Card className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:hafeezahammed264@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hafeezahammed264@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Call</h3>
                  <a
                    href="tel:+919036765726"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 90367 65726
                  </a>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-6 hover:glow-border transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Shivamogga District, Bhadravathi Taluk
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card p-8 hover:glow-border transition-all duration-300 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Send a Message</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out! Whether it's about a project, collaboration, or just to say hi.
              </p>
              <Button
                size="lg"
                className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/30 glass-card hover:glow-border transition-all duration-300"
                asChild
              >
                <a
                  href="mailto:hafeezahammed264@gmail.com"
                  className="flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Email
                </a>
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-muted-foreground">
          © 2025 Hafeez Ahammed. Built with passion and code.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;