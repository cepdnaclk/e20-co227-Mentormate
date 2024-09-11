import coverImage from '../assets/cover1.png';
import questionIcon from '../assets/question.png';
import personalizedIcon from '../assets/personalized.png';
import papersIcon from '../assets/papers.png';
import trackProgressIcon from '../assets/trackprogress.png';
import loginIcon from '../assets/login.png';
import subjectIcon from '../assets/subject.png';
import modeIcon from '../assets/mode.png';

import { Box, Text, Button, VStack, Heading, Image, HStack } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowRightIcon } from '@chakra-ui/icons';
import Navbar from "../components/Navbar";


export default function Home() {
    const navigate = useNavigate();
  return (
    <Box>
      <Navbar />

      {/* Cover Photo and MentorMate Title */}
      <Box as="section" position="relative" textAlign="center">
        <Image 
          src={coverImage} 
          alt="Cover Photo" 
          objectFit="cover" 
          w="100%" 
          h="60vh" 
        />
        <Box 
          position="absolute" 
          top="0" 
          left="0" 
          w="100%" 
          h="60vh" 
          bg="rgba(0, 0, 0, 0.5)" 
          display="flex" 
          alignItems="center" 
          justifyContent="center"
          color="white"
        >
          <VStack>
            <Heading fontSize="5xl" mb="4">MentorMate</Heading>
            <Heading fontSize="4xl">Empower Your Learning with Expert Guidance</Heading>
            <Text fontSize="lg">Your Study Companion, Anytime, Anywhere.</Text>
            <Button colorScheme="blue" size="lg" mt="4" onClick={() => navigate('/login')} >Get Started</Button>
          </VStack>
        </Box>
      </Box>

      {/* Key Features */}
      <VStack as="section" p="8" spacing="8" align="center" bg="gray.50">
        <Heading>Key Features</Heading>
        <HStack spacing="8">
          <Box textAlign="center">
            <Image src={questionIcon} alt="Ask Questions" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Ask Questions</Text>
            <Text>Instantly get answers to your study-related questions.</Text>
          </Box>
          <Box textAlign="center">
            <Image src={personalizedIcon} alt="Personalized Assistance" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Personalized Assistance</Text>
            <Text>Tailored responses based on your academic level.</Text>
          </Box>
          <Box textAlign="center">
            <Image src={papersIcon} alt="Check Your Knowledge" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Test Your Knowledge</Text>
            <Text>Answer model papers and get instant feedback.</Text>
          </Box>
          <Box textAlign="center">
            <Image src={trackProgressIcon} alt="Track Progress" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Track Progress</Text>
            <Text>Monitor your learning journey with personalized feedback.</Text>
          </Box>
        </HStack>
      </VStack>

      {/* How to get started */}
      <VStack as="section" p="8" spacing="8" align="center" bg="white">
        <Heading>How to Get Started</Heading>
        <HStack spacing="8">
          <Box textAlign="center">
            <Image src={loginIcon} alt="Step 1" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Step 1</Text>
            <Text>Sign up or log in.</Text>
          </Box>
          <Box textAlign="center">
            <Image src={subjectIcon} alt="Step 2" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Step 2</Text>
            <Text>Select the subject</Text>
          </Box>
          <Box textAlign="center">
            <Image src={modeIcon} alt="Step 3" boxSize="50px" mb="4" />
            <Text fontWeight="bold">Step 3</Text>
            <Text>Select the mode</Text>
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
}
