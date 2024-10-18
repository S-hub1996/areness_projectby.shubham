// src/components/Dashboard/DashboardContent.js
import React from 'react';
import { Box,chakra, Grid, GridItem, Text, Image, SimpleGrid, Stat, StatLabel, StatNumber, Icon, Stack, Flex } from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc'
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

function StatsCard(props) {
    const { title, stat } = props
    return (
      <Stat
        px={{ base: 4, md: 8 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        // borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <StatLabel fontWeight={'medium'} isTruncated>
          {title}
        </StatLabel>
        <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
          {stat}
        </StatNumber>
      </Stat>
    )
  }
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={'gray.100'}
          mb={1}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
        <Text color={'gray.600'}>{text}</Text>
      </Stack>
    )
  }
  

export default function Dashboard () {
    // const navigate = useNavigate(); // Hook for navigation

  return (
    <>
<Navbar/>
    <Box display="flex">
    {/* Sidebar for desktop */}
    <Sidebar />

    <Box flex="1" p="5">
      {/* Mobile Navbar */}
        <Image w={700} src="https://plus.unsplash.com/premium_photo-1661274209157-118069b926f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Demo" />
      </Box>
      <Grid templateRows={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap="6">
        <GridItem>
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
        What is our company doing?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'We serve'} stat={'50,000 people'} />
        <StatsCard title={'In'} stat={'30 different countries'} />
        <StatsCard title={'Who speak'} stat={'100 different languages'} />
      </SimpleGrid>
    </Box>

        </GridItem>
        <GridItem>
        <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'Lifetime Support'}
          text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
            />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Unlimited Donations'}
          text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
            />
        <Feature
          icon={<Icon as={FcInTransit} w={10} h={10} />}
          title={'Instant Delivery'}
          text={
              'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
            }
            />
      </SimpleGrid>
    </Box>
        </GridItem>
        <GridItem>
          <Box bg="gray.200" p="5" borderRadius="md">
            <Text>Statistical Data 3</Text>
          </Box>
        </GridItem>
      </Grid>
     
    </Box>
            </>
  );
};


