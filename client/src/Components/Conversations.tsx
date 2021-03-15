import React from 'react'
import {ListGroup} from 'react-bootstrap'
import {useConversations} from '../contexts/ConversationsProvider'

const Conversations: React.FC = () => {
  const { conversations, selectConversationIndex }: any = useConversations()

  return (
    <ListGroup variant="flush">
      {conversations.map((conver: any, index: any) => (
        <ListGroup.Item
          key={index}
          action
          active={conver.selected}
          onClick={() => selectConversationIndex(index)}
        >
          {conver.recipients.map((r: any) => r.name).join(", ")}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default Conversations;