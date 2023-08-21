import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Task } from "../types/Task";
import { toTemplateString } from "../util/AmountOfTimeUtil";

interface TaskInfoProps {
  task?: Task;
}

export const TaskInfo = ({ task }: TaskInfoProps) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" w="full" h="full">
      <Heading>{task?.name}</Heading>
      <SimpleGrid columns={2} spacingX={20} spacingY={5}>
        <Box>
          <Text>Tempo planejado</Text>
          <Text borderWidth="1px" borderRadius="lg">
            {toTemplateString(task?.plannedTime)}
          </Text>
        </Box>
        <Box>
          <Text>Tempo executado</Text>
          <Text borderWidth="1px" borderRadius="lg">
            {toTemplateString(task?.loggedTime)}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};
