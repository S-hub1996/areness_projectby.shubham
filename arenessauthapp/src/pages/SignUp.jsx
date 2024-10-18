'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage 
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate(); 

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in signup")
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.username || !formData.password || !formData.confirmPassword) {
      setError('All fields are required.');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (formData.password.length>8) {
        setError('Passwords must be at least 8 characters');
        return;
      }
    // If validation passes, save user data to local storage
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      username: formData.username,
      password: formData.password, // Consider hashing passwords in a real application
    };
    
    localStorage.setItem('user', JSON.stringify(newUser));
    setSuccess('User registered successfully! Please sign in.');
    setError(''); // Clear error message on successful registration
    setFormData({ firstName: '', lastName: '', email: '', username: '', password: '', confirmPassword: '' }); // Reset form
    navigate('/');
  };
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
          <FormControl isRequired mb={3} isInvalid={error}>
          <FormLabel>First Name</FormLabel>
          <Input name="firstName" value={formData.firstName} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired mb={3} isInvalid={error}>
          <FormLabel>Last Name</FormLabel>
          <Input name="lastName" value={formData.lastName} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired mb={3} isInvalid={error}>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired mb={3} isInvalid={error}>
          <FormLabel>Username</FormLabel>
          <Input name="username" value={formData.username} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired mb={3} isInvalid={error}>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired mb={3} isInvalid={error}>
          <FormLabel>Confirm Password</FormLabel>
          <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
              type='submit'
              
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>

            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} onClick={() => navigate('/')}>Login</Link>
              </Text>
            </Stack>
          </Stack>

        </Box>
        </form>
      </Stack>
    </Flex>
  )
}