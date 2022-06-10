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
        <div className='bg-zinc-900 py-12 px-12 rounded-3xl'>
            <h1 className='text-5xl text-center text-white font-bold py-10'>My Skills</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4'>
                {
                    skills.map(skill => <Skill key={skill.id} skill={skill}></Skill>)
                }
            </div>
        </div>
    );
};

export default Skills;