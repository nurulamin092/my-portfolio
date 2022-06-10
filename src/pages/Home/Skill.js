import React from 'react';

const Skill = ({ skill }) => {
    const { img, name } = skill;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 mask mask-hexagon">
                        <img src={img} alt='' />
                    </div>
                </div>
            </figure>

            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default Skill;