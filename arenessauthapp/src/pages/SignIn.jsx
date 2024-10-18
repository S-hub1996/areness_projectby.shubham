'use client'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, setError } from '../store/authSlice';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import {
  Flex,
  FormControl,
  FormLabel,
  Checkbox,
  Stack,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.auth);
    const navigate = useNavigate(); 

    const handleSignIn = () => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        dispatch(login(storedUser));
        navigate('/dashboard');
      } else {
        dispatch(setError('Invalid credentials'));
      }
    };
  return (
    <Flex
    backgroundImage={'https://images.unsplash.com/photo-1729006076855-4297fcf364df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={(e) => setPassword(e.target.value)} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
              type='submit'
              onClick={handleSignIn}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
              {error && <Text color="red">{error}</Text>}
            </Stack>
            <Text mt={4}>
        New user?{' '}
        <Button  variant="link" colorScheme="teal" onClick={() => navigate('/signup')}>
          Register
        </Button>
      </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}