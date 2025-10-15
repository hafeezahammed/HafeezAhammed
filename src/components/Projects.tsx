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
      title: "Library",
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
      title: "#2Code",
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
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center gradient-text mb-3 sm:mb-4">
            Projects I've Worked On
          </h2>
          <p className="text-center text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            From mobile apps to web solutions - building the future one project at a time
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
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
              className="flex"
            >
              <Card className="glass-card p-4 sm:p-5 md:p-6 hover:glow-border transition-all duration-300 group cursor-pointer flex flex-col relative overflow-hidden w-full min-h-0 sm:min-h-[320px] lg:min-h-[360px]">
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
                  className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"
                />

                {/* Project Header */}
                <div className="flex items-center justify-between mb-3 sm:mb-4 relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg glass-card flex items-center justify-center flex-shrink-0">
                    <project.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium ${
                    project.status === "Completed" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : project.status === "In Progress"
                      ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-grow relative z-10">
                  {/* Project Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 gradient-text line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-primary text-sm mb-2 sm:mb-3 font-medium">
                    {project.subtitle}
                  </p>

                  {/* Project Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-2 sm:space-y-3">
                    {/* Tech Logos */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.techLogos.map((logo, index) => (
                        <span 
                          key={index} 
                          className="text-base sm:text-lg" 
                          title={project.technologies[index]}
                        >
                          {logo}
                        </span>
                      ))}
                    </div>
                    
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20 whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-cosmic"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info for Larger Screens */}
        <motion.div
          className="hidden lg:block text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground text-sm">
            More projects coming soon... Always learning, always building 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
