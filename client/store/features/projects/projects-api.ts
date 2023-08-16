import { Project } from "@/src/components/home_page_components/projects/projectsData";
import { ApiResponse } from "@/types/response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hope-for-children.onrender.com",
  }),
  endpoints: (builder) => ({
    getProjects: builder.query<ApiResponse<Project[]>, void>({
      query: () => "/api/Projects", // Assuming the API endpoint for getting all projects is 'projects'
    }),
    getProjectById: builder.query<ApiResponse<Project>, string>({
      query: (projectId) => `/api/Projects/${projectId}`, // Assuming the API endpoint for getting a project by ID is 'projects/:id'
    }),
  }),
});

export const { useGetProjectsQuery } = projectsApi;
