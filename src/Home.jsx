import { Box, Stack, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import TeamCard from './TeamCard';
import MentorCard from './MentorCard';
import MentorAdvisor from './MentorAdvisor';
import './styles/home.scss';

const Home = () => {
  const university = [
    'Cambridge University',
    'Harvard University',
    'University of California',
    'Eth Zurich',
    'Max Planck',
    'University of Edinberg',
    "John's Hopkins",
    'Michigan State',
    'University of Illinois',
    'Humboldt University Berlin',
  ];
  const mentorAndAdvisor = [
    {
      mentor_name: 'Dr. Jane Smith',
      university_name: 'Stanford University',
      id: 'asdhajsdbhjabhsjdfdfv',
      src: 'https://bit.ly/dan-abramov',
      occupation: 'IIT B',
    },
    {
      mentor_name: 'Prof. John Doe',
      university_name: 'Harvard University',
      id: 'sdjfdlaajsdbhjabhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
      occupation: 'Google',
    },
    {
      mentor_name: 'Dr. Emily Johnson',
      university_name: 'Princeton University',
      id: 'fhksdajfdhaibhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
      occupation: 'Amazon',
    },
  ];
  const mentorData = [
    {
      mentor_name: 'Dr. Jane Smith',
      university_name: 'Stanford University',
      id: 'asdhajsdbhjabhsjdfdfv',
      src: 'https://bit.ly/dan-abramov',
    },
    {
      mentor_name: 'Prof. John Doe',
      university_name: 'Harvard University',
      id: 'sdjfdlaajsdbhjabhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Dr. Emily Johnson',
      university_name: 'MIT',
      id: 'fhksdajfdhaibhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Prof. Michael Williams',
      university_name: 'University of Oxford',
      id: 'dskjfhjkdsbhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Dr. Sarah Brown',
      university_name: 'ETH Zurich',
      id: 'sdhfjkdhsbhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Prof. David Johnson',
      university_name: 'University of Cambridge',
      id: 'asdjfkbajsdbhjabhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Dr. Maria Garcia',
      university_name: 'California Institute',
      id: 'sfkjasdfhsjbhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Prof. Robert Lee',
      university_name: 'Princeton University',
      id: 'sdfjklhasdbhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Dr. Amanda Miller',
      university_name: 'Yale University',
      id: 'jksdfhasdibhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
    {
      mentor_name: 'Prof. Jessica White',
      university_name: 'University of Chicago',
      id: 'jsdfbkjasdbhjabhsjdfdfv',
      src: 'https://bit.ly/ryan-florence',
    },
  ];
  return (
    <>
      <Box maxW={'100%'} maxH={'100%'} mx={'2vw'}>
        <Heading
          textAlign={'center'}
          fontSize={'5xl'}
          className={'headingstyle'}
        >
          Team Page
        </Heading>
        <Heading
          fontSize={'3xl'}
          textAlign={'center'}
          className={'headingstyle'}
        >
          Learn From Scientists,Top Scholars From Top Institutes in the world
        </Heading>
        <Stack
          direction={['column', 'row']}
          display={'flex'}
          wrap={['unset', 'wrap']}
        >
          {university.map(i => (
            <TeamCard university={i} />
          ))}
          <Text
            display={'flex'}
            direction={'column'}
            w={['full', '20vw']}
            pb={'5'}
            justifyContent={'flex-end'}
            alignItems={'flex-end'}
            fontSize={['xl', '2xl']}
            fontWeight={'bold'}
            className={'headingstyle'}
          >
            ........ and so on
          </Text>
        </Stack>
        <Heading
          fontSize={'3xl'}
          textAlign={'center'}
          className={'headingstyle'}
        >
          Meet Your Mentors
        </Heading>

        <Stack direction={['column', 'row']} display={'flex'} wrap={'wrap'}>
          {mentorData.map(i => (
            <MentorCard
              mentorName={i.mentor_name}
              university={i.university_name}
              src={i.src}
            />
          ))}
        </Stack>

        <Heading fontSize={'3xl'} className="headingstyle" textAlign={'center'}>
          Mentor and Advisor
        </Heading>
        <Stack
          direction={['column', 'row']}
          display={'flex'}
          wrap={'wrap'}
          justifyContent={'center'}
        >
          {mentorAndAdvisor.map(i => (
            <MentorAdvisor
              mentorName={i.mentor_name}
              university={i.university_name}
              src={i.src}
              occupation={i.occupation}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Home;
