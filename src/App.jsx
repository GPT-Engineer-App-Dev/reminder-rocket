import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Box as="nav" bg="blue.500" p={4} color="white">
        <Flex justify="space-between" align="center" maxW="container.md" mx="auto">
          <Text fontSize="lg" fontWeight="bold">My Todo App</Text>
          <Flex>
            <Link href="/" p={2}>Home</Link>
            <Link href="#" p={2}>About</Link>
          </Flex>
        </Flex>
      </Box>
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
