export default function Projects() {
    const projects = [
      {
        title: "E-commerce Next.js",
        description: "Plateforme e-commerce ",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      },
     
      {
        title: "API REST",
        description: "API backend pour application mobile",
        technologies: ["Node.js", "Express", "MongoDB"],
      },
    ]
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-8">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-black p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-white 600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-black 200 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }