import React from 'react';
import { Card, Separator } from '@shadcn/ui';

export const ChatWindow = ({ messages, currentUser }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-4 ${msg.user === currentUser ? 'self-end' : ''}`}
        >
          <Card variant={msg.user === currentUser ? 'secondary' : 'default'}>
            <div className="flex items-center space-x-2">
              <span className="font-medium">{msg.user}</span>
              <Separator orientation="vertical" />
              <span>{msg.message}</span>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};
