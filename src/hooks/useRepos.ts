import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { ReposProps } from "./types";

import api from "../api/github";

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, githubUser] = ctx.queryKey;
  const { data } = await api.get<ReposProps[]>(`/users/${githubUser}/repos`);
  return data;
}

export function useFetchRepositories(githubUser: string) {
  return useQuery(["repos", githubUser], fetchRepos);
}
