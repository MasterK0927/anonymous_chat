import React, { useState } from 'react';
import { Input, Button } from '@shadcn/ui';

export const MessageInput = ({ onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <div className="bg-white p-4 shadow-md flex items-center space-x-2">
      <Input
        type="text"
        value={inputMessage}
        onChange={handleInputChange}
        placeholder="Type your message..."
        className="flex-1"
      />
      <Button onClick={handleSendMessage}>Send</Button>
    </div>
  );
};
