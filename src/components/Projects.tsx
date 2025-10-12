import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, Database, Globe, Smartphone, BookOpen, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PulsPense",
      subtitle: "Money Tracker App",
      description: "Feature-rich money tracking app with offline support and Google Drive backup",
      technologies: ["Flutter", "SQLite", "Google Drive API"],
      icon: Smartphone,
      techLogos: ["📱", "💾", "☁️"],
      status: "Completed",
      color: "from-green-500/20 to-blue-500/20"
    },
    {
      id: 2,
      title: "SMVGSC Library",
      subtitle: "Management System",
      description: "College library management system for efficient book tracking and operations",
      technologies: ["Flutter", "SQLite"],
      icon: BookOpen,
      techLogos: ["📱", "💾"],
      status: "In Progress",
      color: "from-yellow-500/20 to-green-500/20"
    },
    {
      id: 3,
      title: "SMVGSC Library",
      subtitle: "Website",
      description: "Informative website for college library with modern UI and responsive design",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      icon: Globe,
      techLogos: ["⚡", "⚛️", "🎨"],
      status: "Completed",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      id: 4,
      title: "The Coders Club",
      subtitle: "Website",
      description: "Informative website showcasing the Coders Club community and activities",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      icon: Users,
      techLogos: ["⚡", "⚛️", "🎨"],
      status: "Completed",
      color: "from-orange-500/20 to-red-500/20"
    },

  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center gradient-text">
            Projects I've Worked On
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            From mobile apps to web solutions - building the future one project at a time
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Card className="glass-card p-6 hover:glow-border transition-all duration-300 group cursor-pointer h-80 flex flex-col relative overflow-hidden">
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Floating Animation */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
                />

                {/* Project Icon */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="w-12 h-12 rounded-lg glass-card flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold mb-1 gradient-text relative z-10">
                  {project.title}
                </h3>
                <p className="text-primary text-sm mb-3 font-medium relative z-10">
                  {project.subtitle}
                </p>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm mb-4 flex-grow relative z-10">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.techLogos.map((logo, index) => (
                      <span key={index} className="text-lg" title={project.technologies[index]}>
                        {logo}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-cosmic"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;