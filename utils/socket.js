import io from 'socket.io-client';

let socket = null;

export const connectSocket = () => {
  if (!socket) {
    socket = io('http://localhost:3000');
  }
  return socket;
};

export const sendMessage = (data) => {
  socket.emit('message', data);
};

export const joinGroup = (data) => {
  socket.emit('join_group', data);
};
