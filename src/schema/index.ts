// list of jobs
const jobs = [
  {
    id: "1",
    title: "Software Engineer",
    description: "Develop and maintain software applications.",
    company: "Tech Company",
  },
  {
    id: "2",
    title: "Product Manager",
    description: "Lead product development and strategy.",
    company: "Tech Company",
  },
];

export const resolvers = {
  Query: {
    jobs: () => jobs,
  },
};
