import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const TeamCard = ({ university }) => {
  return (
    <Box
      w={['full', '20vw']}
      px={['5', '5']}
      py={['0', '10']}
      m={['0', '5']}
      border={'2px'}
      borderRadius={'xl'}
      bgGradient="linear(to-r, #234EB0 3.66%, #9010B0 100%)"
      color={'white'}
      gap={['0', '2']}
      _hover={{
        bg: '#234EB0',
        cursor: 'pointer',
      }}
    >
      <Text textAlign={'center'} color={'white'}>
        {university}
      </Text>
    </Box>
  );
};

export default TeamCard;
