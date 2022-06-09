import React, { useEffect, useState } from 'react';
import Skill from './Skill';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch("skills.json")
            .then((res) => res.json())
            .then((data) => setSkills(data));
    }, []);
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4'>
            {
                skills.map(skill => <Skill skill={skill}></Skill>)
            }
        </div>
    );
};

export default Skills;