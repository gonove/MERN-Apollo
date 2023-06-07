import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects';

export const ProjectForm = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    // para refrescar la pantalla
    refetchQueries: [{ query: GET_PROJECTS }, 'GetProjects'],
  });

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p> Damn ⛔️ {error.message} </p>}

      <input
        type="text"
        name="name"
        placeholder="Write a title"
        onChange={handleChange}
      />
      <textarea
        name="description"
        rows="3"
        placeholder="Write a description"
        onChange={handleChange}
      ></textarea>

      <button
        type="submit"
        disabled={!project.name || !project.description || loading}
      >
        Submit
      </button>
    </form>
  );
};
