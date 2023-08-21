import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Task } from "../types/Task";
import { toTemplateString } from "../util/AmountOfTimeUtil";
import { TaskService } from "../service/TaskService";

interface TaskListProps {
  setSelectedTask: (task: Task) => void;
}

const TaskList = ({ setSelectedTask }: TaskListProps) => {
  const [taskList, setTaskList] = useState<Task[]>();

  useEffect(() => {
    TaskService.list().then((response) => {
      setTaskList(response.data);
    });
  }, []);

  return (
    <Box borderWidth="1px" borderRadius="lg" w="full" h="full">
      <Heading>Lista de Tarefas</Heading>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nome</Th>
              <Th>Tempo planejado</Th>
              <Th>Tempo executado</Th>
            </Tr>
          </Thead>
          <Tbody>
            {taskList?.map((task) => (
              <Tr onClick={() => setSelectedTask(task)} key={task.id}>
                <Td>{task.id}</Td>
                <Td>{task.name}</Td>
                <Td>{toTemplateString(task.plannedTime)}</Td>
                <Td>{toTemplateString(task.loggedTime)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskList;
