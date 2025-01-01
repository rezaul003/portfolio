import React from 'react';
import Footer from './Shared/Footer';
import Navbar from './Shared/NavBar';
import projectsData from '../../../public/projects.json'; // Import the projects data from the JSON file

const Projects = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Projects Section */}
      <section className="projects py-16 lg:py-24 bg-base-100">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-12">All Projects</h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="project-card bg-white rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover mx-auto"
                  />
                  {/* Tiny Divider */}
                  <hr className="my-2 border-t border-gray-300" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;
