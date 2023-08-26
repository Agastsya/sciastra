import { Box, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { Avatar } from '@chakra-ui/react';

const MentorAdvisor = ({ mentorName, university, src, occupation }) => {
  return (
    <Box
      w={['full', '25vw']}
      px={['5', '5']}
      py={'10'}
      m={['0', '5']}
      border={'2px'}
      borderRadius={'xl'}
      display={'grid'}
      justifyContent={'center'}
      bgGradient="linear(to-r, #234EB0 3.66%, #9010B0 100%)"
      color={'white'}
    >
      <Avatar src={src} size={'2xl'} />
      <Text>{mentorName}</Text>
      <Text>{university}</Text>
      <Text>{occupation}</Text>
      <Button>Message him now</Button>
    </Box>
  );
};

export default MentorAdvisor;
