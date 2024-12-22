import { useState, useEffect } from 'react';
import { connectSocket, sendMessage, joinGroup } from '../utils/socket';

export const useSocket = () => {
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState('');
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [groupPassword, setGroupPassword] = useState('');

  useEffect(() => {
    const socket = connectSocket();
    socket.on('connect', () => {
      console.log('Connected to server');
      setCurrentUser(socket.id);
    });

    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    socket.on('groups', (data) => {
      setGroups(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return {
    messages,
    currentUser,
    groups,
    currentGroup,
    groupPassword,
    sendMessage,
    joinGroup,
    setGroupPassword,
    setCurrentGroup,
  };
};
