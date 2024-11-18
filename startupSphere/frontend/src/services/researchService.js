import API from "./api";

export const getResearchProjects = async () => {
  try {
    const response = await API.get("/research");
    return response.data;
  } catch (error) {
    console.error("Error fetching research projects:", error);
  }
};
