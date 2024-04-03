import { GraphQLClient } from "graphql-request";
import { useAppConfig } from "./useAppConfig";

const useGraphqlFetch = (gql: any) => {
  const config = useAppConfig();

  let client: GraphQLClient | null;

  client = new GraphQLClient(config?.graph.base, {
    headers: {},
  });

  return async (...args: any) => {
    return client?.request(gql, ...args);
  };
};
export default useGraphqlFetch;
