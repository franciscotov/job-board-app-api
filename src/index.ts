import { ApolloServer } from "@apollo/server";
import { resolvers } from "./schema/index";

import express from "express";
import cors from "cors";
import gql from "graphql-tag";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { expressMiddleware } from "@as-integrations/express5";
import { readFileSync } from "fs";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

//highlight-start
const typeDefs = gql(
  readFileSync("src/schema/schema.graphql", {
    encoding: "utf-8",
  })
);

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
});
// Note you must call `start()` on the `ApolloServer`
// instance before passing the instance to `expressMiddleware`
(async () => {
  await server.start();
  // server.ap
  //highlight-end

  // app.use("/record", records);

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
})();
