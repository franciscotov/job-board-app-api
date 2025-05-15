export const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  
 type Job {
   id: ID!
   title: String!
   description: String!
   company: String!
 }

 type Company {
  id: ID!
  jobs: [Job!]!
  name: String!
  description: String!
}

  type Query {
  jobs: [Job!]!
  companies: [Company!]!
}

type Mutation {
  createJob(title: String!, description: String!, company: String!): Job!
}
`;

// list of jobs
const jobs = [
  {
    id: '1',
    title: 'Software Engineer',
    description: 'Develop and maintain software applications.',
    company: 'Tech Company',
  },
  {
    id: '2',
    title: 'Product Manager',
    description: 'Lead product development and strategy.',
    company: 'Tech Company',
  },
];

export const resolvers = {
  Query: {
    jobs: () => jobs,
  },
};
