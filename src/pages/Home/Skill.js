import React from 'react';

const Skill = ({ skill }) => {
    const { img, name } = skill;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default Skill;