const groups = [
  { id: 1, name: 'Group 1', password: 'password1' },
  { id: 2, name: 'Group 2', password: 'password2' },
  { id: 3, name: 'Group 3', password: 'password3' },
];

const handleSocketConnection = (socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (data) => {
    socket.broadcast.emit('message', data);
  });

  socket.on('join_group', (data) => {
    const group = groups.find((g) => g.id === data.groupId);
    if (group && group.password === data.password) {
      socket.join(data.groupId);
      socket.emit('groups', groups);
    } else {
      socket.emit('error', 'Invalid group password');
    }
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
};

module.exports = {
  handleSocketConnection,
};
