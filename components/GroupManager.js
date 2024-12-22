import React from 'react';
import { Card, Input, Button } from '@shadcn/ui';

export const GroupManager = ({
  groups,
  currentGroup,
  setCurrentGroup,
  groupPassword,
  setGroupPassword,
  onJoinGroup,
}) => {
  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-lg font-medium mb-4">Groups</h3>
      <div className="space-y-2">
        {groups.map((group, index) => (
          <Card key={index} className="flex justify-between items-center">
            <span>{group.name}</span>
            <Button onClick={() => setCurrentGroup(group.id)}>Join</Button>
          </Card>
        ))}
        {currentGroup && (
          <Card className="flex flex-col space-y-2">
            <Input
              type="password"
              value={groupPassword}
              onChange={(e) => setGroupPassword(e.target.value)}
              placeholder="Enter group password"
            />
            <Button onClick={onJoinGroup}>Join</Button>
          </Card>
        )}
      </div>
    </div>
  );
};
