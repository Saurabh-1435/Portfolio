import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

import chatappImg from '../assets/projects/D-agency-1.jpg';
import dashboardImg from '../assets/projects/interior-2.jpg';
import ecommerceImg from '../assets/projects/e-commerce.jpg';
import billingImg from '../assets/projects/D-agency-2.jpg';
import shilpkar from '../assets/projects/shilpkar.jpg';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "E-commerce Store",
      description: "👗 E-commerce Website for Women's Clothing A stylish and responsive online store for modern women’s fashion, built using React ⚛️, Vite ⚡, and CSS 🎨. Features smooth UI, dynamic product filtering 🗂️, and a seamless add-to-cart experience 🛒.",
      tech: ["React", "JSX", "CSS"],
      category: "React",
      github: "https://github.com/Saurabh-1435/E-commerce-Website",
      demo: "https://saurabh-1435.netlify.app/",
      image: ecommerceImg,
    },
    {
      title: "Shilpkar",
      description: "✨ Shilpkar is a modern interior-design platform built with React and Vite 🏡, offering: 🔧 Modular Components for rapid UI assembly 📱 Responsive Layouts optimized for all devices 🎨 Theming Support (light & dark modes) ⚡ Vite-Powered fast development & builds",
      tech: ["React", "JSX", "CSS"],
      category: "Frontend",
      github: "https://github.com/Saurabh-1435/Shilpkar",
      demo: "https://shilpkar.netlify.app/",
      image: shilpkar,
    },
    {
      title: "Digital-Agency",
      description: "Creative digital agency delivering innovative design, web development, and marketing solutions for modern brands.",
      tech: ["React", "TSX", "Tailwind Css"],
      category: "React",
      github: "https://github.com/Saurabh-1435/digital-agency-04",
      demo: "https://digital-agency-04.netlify.app/",
      image: chatappImg,
    },
    {
      title: "Digital-Agency No-2",
      description: "Professional digital agency platform featuring web solutions, branding, and client showcases.",
      tech: ["React", "TSX", "Tailwind Css"],
      category: "React",
      github: "#",
      demo: "#",
      image: billingImg,
    },
    {
      title: "Interior Website.",
      description: "Elegant interior design website showcasing projects, services, and client testimonials.",
      tech: ["React", "TSX", "Tailwind Css"],
      category: "React",
      github: "https://github.com/Saurabh-1435/furniture-collection--Using-ReactsJs-and-Tailwind-Css.",
      demo: "https://furnitures-collection.netlify.app/",
      image: dashboardImg,
    },
  ];

  const filters = ['All', 'Frontend', 'React'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            My <span className="text-red-500">Projects</span>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterName) => (
            <Button
              key={filterName}
              variant={filter === filterName ? "default" : "outline"}
              onClick={() => setFilter(filterName)}
              className={filter === filterName
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              }
            >
              {filterName}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="glassmorphism rounded-lg overflow-hidden hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="border-gray-500 text-gray-500 cursor-not-allowed"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
