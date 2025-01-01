import React from 'react';
import projectsData from '../../../public/projects.json'; // Import the projects data from the JSON file

const HomeFeaturedProjects = () => {
  return (
    <section className="featured-projects py-16 lg:py-24 bg-base-100">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {projectsData.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="project-card rounded-lg overflow-hidden cursor-pointer bg-slate-50"
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <div className="flex justify-center items-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[95%] h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Show All Button */}
        <div className="mt-8">
          <a
            href="/projects"
            className="btn bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-md"
          >
            Show All
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeFeaturedProjects;
