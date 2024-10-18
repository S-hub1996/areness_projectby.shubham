// src/components/Dashboard/Sidebar.js
import React from 'react';
import { Box, VStack, Text, Link, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleLogout = () => {
        console.log("Logging out..."); // Debugging statement
        localStorage.removeItem('user'); // Clear user data from local storage
        navigate('/'); // Navigate back to Sign In page

        
    };
  return (
    <Flex flexDirection={'row'} w="150px" bg="gray.100" h="100vh" p="5" display={{ base: 'none', md: 'block' }} justifyContent={'space-between'}>
      <VStack align="start">
        <Link href="#">Home</Link>
        <Link href="#">Analytics</Link>
        <Link href="#">Settings</Link>
      </VStack>

      <Button colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
    </Flex>
  );
};

export default Sidebar;
