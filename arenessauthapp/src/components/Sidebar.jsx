// src/components/Dashboard/Sidebar.js
import React from 'react';
import { Box, VStack, Text, Link, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate(); // Hook for navigation

    const handleLogout = () => {
        console.log('logout')
        localStorage.removeItem('user'); // Clear user data from local storage
        navigate('/'); // Navigate back to Sign In page
    };
  return (
    <Box w="250px" bg="gray.100" h="100vh" p="5" display={{ base: 'none', md: 'block' }}>
      <VStack align="start">
        <Link href="#">Home</Link>
        <Link href="#">Analytics</Link>
        <Link href="#">Settings</Link>
      </VStack>

      <Button colorScheme="red" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
