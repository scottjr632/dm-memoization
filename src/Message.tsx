import React from 'react';
import styled from '@emotion/styled';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

const MessageContainer = styled(Box)`
  background-color: rgba(0,0,0,0.4);
  width: 90%;
  border-radius: 8px;
  padding-top: 1rem;
`;

interface Props {
  id: number;
  avatar: string;
  username: string;
  content: string;
  date: string;
}

function Message({ id, content, date, username, avatar }: Props) {
  const localDate =
    `${new Date(date).toLocaleDateString()} ${new Date(date).toLocaleTimeString()}`;
  return (
    <MessageContainer marginX={'auto'} marginY={'0.49rem'}>
      {console.log(id, ' => re-rendered')}
      <Flex paddingX={'1.2rem'}>
        <Avatar name={username} src={avatar} />
        <Box marginY='auto' marginX='1rem'>
          <Text fontWeight='bold'>{username}</Text>
          <Text>
            {localDate}
          </Text>
        </Box>
      </Flex>
      <Text
        paddingX={'2rem'} 
        paddingY={'1rem'}
      >
        {content}
      </Text>
    </MessageContainer>
  );
}

export default Message;