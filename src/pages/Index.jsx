import { useState } from 'react';
import { Box, Button, Container, Flex, IconButton, Input, List, ListItem, Text, useToast, VStack } from '@chakra-ui/react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const toast = useToast();

  const handleAddTask = () => {
    if (input.trim() === '') {
      toast({
        title: 'No task entered',
        status: 'warning',
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTasks([...tasks, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  };

  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">Todo App</Text>
        <Flex as="form" onSubmit={(e) => { e.preventDefault(); handleAddTask(); }} width="100%">
          <Input
            placeholder="Add a new task..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="md"
          />
          <Button type="submit" colorScheme="blue" ml={2}>Add</Button>
        </Flex>
        <List width="100%">
          {tasks.map(task => (
            <ListItem key={task.id} display="flex" justifyContent="space-between" alignItems="center" p={2} bg={task.isCompleted ? 'green.100' : 'gray.100'}>
              <Text as={task.isCompleted ? 's' : 'span'}>{task.text}</Text>
              <Flex>
                <IconButton icon={<FaCheckCircle />} onClick={() => handleCompleteTask(task.id)} colorScheme="green" aria-label="Complete Task" />
                <IconButton icon={<FaTrash />} onClick={() => handleDeleteTask(task.id)} colorScheme="red" ml={2} aria-label="Delete Task" />
              </Flex>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;