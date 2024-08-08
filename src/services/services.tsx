import axios from "axios";

interface Task {
  id: number;
  title: string;
}

const API_URL = "http://localhost:8080/tasks";

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};
