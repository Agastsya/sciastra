import { Text, Container } from '@chakra-ui/react';
import React from 'react';
import { Avatar } from '@chakra-ui/react';
import './styles/mentorcard.scss';

const MentorCard = ({ mentorName, university, src, occupation }) => {
  return (
    <Container
      w={['full', '22vw']}
      px={['5', '5']}
      py={'10'}
      m={['0', '2']}
      my={'5'}
      borderRadius={'xl'}
      display={'grid'}
      justifyContent={'center'}
      className="newcard"
      color={'white'}
      boxShadow={'dark-lg'}
      columnGap={'2'}
      gap={'2'}
    >
      <Avatar src={src} size={'2xl'} />
      <Text>{mentorName}</Text>
      <Text>{university}</Text>
    </Container>
  );
};

export default MentorCard;
