import { gql } from 'graphql-tag';

export const GET_PROJECTS = gql`
  {
    projects {
      _id
      name
      description
    }
  }
`;
