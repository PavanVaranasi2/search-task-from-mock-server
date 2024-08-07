import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TaskSearch from "./components/organisms/TaskSearch";

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Task Search
      </Typography>
      <TaskSearch />
    </Container>
  );
};

export default App;
