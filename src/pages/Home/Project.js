import React from 'react';
import { useNavigate } from 'react-router-dom';

const Project = ({ project }) => {
    const { id, img, name, technology, theme, live, client, server } = project;
    const navigate = useNavigate()
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{technology}</p>
                <div class="card-actions">
                    <a target='_blank' href={live} className="btn btn-primary" rel="noreferrer">
                        Live
                    </a>
                    <button onClick={() => navigate(`/details/${id}`)} class="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;