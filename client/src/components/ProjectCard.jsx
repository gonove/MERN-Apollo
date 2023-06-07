import React from 'react';

export const ProjectCard = ({ project }) => {
  return (
    <>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </>
  );
};
