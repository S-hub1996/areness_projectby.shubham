// src/components/Dashboard/DashboardContent.js
import React from 'react';
import { Box, Grid, GridItem, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard () {
    const navigate = useNavigate(); // Hook for navigation

  return (
    <Box p="5">
      <Text fontSize="2xl" mb="5">Dashboard</Text>
      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="6">
        <GridItem>
          <Box bg="gray.200" p="5" borderRadius="md">
            <Text>Statistical Data 1</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="gray.200" p="5" borderRadius="md">
            <Text>Statistical Data 2</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box bg="gray.200" p="5" borderRadius="md">
            <Text>Statistical Data 3</Text>
          </Box>
        </GridItem>
      </Grid>
      <Box mt="5">
        <Image src="https://via.placeholder.com/300" alt="Demo" />
      </Box>
    </Box>
  );
};


