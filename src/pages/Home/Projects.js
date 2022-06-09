import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);
    return (
        /*  <div>
             {
                 projects.map(project => <Project key={project.id} project={project}></Project>)
             }
         </div> */
        <div
            name="projects"
            className="w-full min-h-screen h-full pt-[80px] text-gray-300 bg-dark"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
                        My projects
                    </p>
                    <p className="py-6">Check out some of my recent project</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Item */}
                    {projects.map((project) => (
                        <Project key={project.id} project={project} />
                    ))}
                    <div
                        className="shadow-lg shadow-dark group container rounded-md flex justify-center items-center mx-auto comingSoon-div bg-slate-500"
                    >
                        <h2 className="text-3xl text-white">Coming Soon</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;