import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import TextField from "../atoms/TextField";
import TaskList from "../molecules/TaskList";
import { fetchTasks } from "../../services/services";

interface Task {
  id: number;
  title: string;
}

const TaskSearch: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const fetchedTasks = await fetchTasks();
        setTasks(fetchedTasks);
        console.log("Fetching Tasks: ", fetchTasks);
      } catch (error) {
        setError("Error fetching tasks");
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, []);

  const filteredTasks =
    tasks?.filter((task) =>
      task.title.toLowerCase().startsWith(searchValue.toLowerCase()),
    ) || [];

  return (
    <Box>
      <TextField
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        label="Search Tasks"
        variant="outlined"
        isFullWidth={true}
      />
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TaskList tasks={filteredTasks} />
      )}
    </Box>
  );
};

export default TaskSearch;
