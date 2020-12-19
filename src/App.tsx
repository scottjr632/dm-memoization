import React, { useState } from 'react';
import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Input,
  theme,
} from '@chakra-ui/react';

import Message from './Message';
import localMessages from './messages.json';

const getNewId = (ids: {id: number}[]) => Math.max(...ids.map(v => v.id)) + 1;

export const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(localMessages);

  const sendMessage = () => {
    setMessages(messages => {
      return [...messages, {
        id: getNewId(messages),
        content: input,
        date: new Date().toISOString(),
        username: 'Me',
        avatar: '',
      }];
    });
    setInput('');
  };

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter')
      sendMessage();
  };

  return (
    <ChakraProvider theme={theme}>
      <Box maxW='1080px' marginX='auto'>
        <Box
          marginX='auto'
          height='calc(100vh - 2.5rem - 1.2rem)'
          overflow='scroll'
        >
          {messages.map(message => (
            <Message key={message.id} {...message} />
          ))}
        </Box>
        <Flex marginBottom='1.2rem'>
          <Input
            value={input}
            placeholder='Press enter to send'
            onKeyPress={handleEnter}
            onChange={e => setInput(e.currentTarget.value)}
          />
          <Button onClick={sendMessage}>Send</Button>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};