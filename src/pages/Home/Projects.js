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
        <div className='grid lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-4 my-10'>
            {
                projects.map(project => <Project key={project.id} project={project}></Project>)
            }
        </div>

    );
};

export default Projects;