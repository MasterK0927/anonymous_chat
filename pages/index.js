import React from 'react';
import { ChatWindow } from '../components/ChatWindow';
import { GroupManager } from '../components/GroupManager';
import { MessageInput } from '../components/MessageInput';
import { useSocket } from '../hooks/useSocket';
import { encryptMessage, decryptMessage } from '../utils/encryption';
import { ENCRYPTION_KEY } from '../utils/constants';

const ChatApp = () => {
  const {
    messages,
    currentUser,
    groups,
    currentGroup,
    groupPassword,
    sendMessage,
    joinGroup,
    setGroupPassword,
    setCurrentGroup,
  } = useSocket();

  const handleSendMessage = (message) => {
    const encryptedMessage = encryptMessage(message, ENCRYPTION_KEY);
    sendMessage({ user: currentUser, message: encryptedMessage });
  };

  const handleJoinGroup = () => {
    if (groupPassword.trim() !== '') {
      joinGroup({ groupId: currentGroup, password: groupPassword });
      setGroupPassword('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <ChatWindow
        messages={messages.map((msg) => ({
          ...msg,
          message: decryptMessage(msg.message, ENCRYPTION_KEY),
        }))}
        currentUser={currentUser}
      />
      <MessageInput onSendMessage={handleSendMessage} />
      <GroupManager
        groups={groups}
        currentGroup={currentGroup}
        setCurrentGroup={setCurrentGroup}
        groupPassword={groupPassword}
        setGroupPassword={setGroupPassword}
        onJoinGroup={handleJoinGroup}
      />
    </div>
  );
};

export default ChatApp;
