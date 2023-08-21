import { useState } from "react";
import TaskList from "../components/TaskList";
import { Task } from "../types/Task";
import { TaskInfo } from "../components/TaskInfo";
import { HStack } from "@chakra-ui/react";

export const TaskPage = () => {
  const [selectedTask, setSelectedTask] = useState<Task>();
  return (
    <HStack>
      <TaskList setSelectedTask={setSelectedTask} />
      <TaskInfo task={selectedTask} />
    </HStack>
  );
};
