//@ts-nocheck
import React, { useState } from "react";
import { Tab, Nav, Button, Modal } from "react-bootstrap";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'

const Sidebar: React.FC<{ id: string }> = ({ id }) => {
  const [activeKey, setActiveKey] = useState<string>("conversations");
  const converIsOpen: bool = activeKey === 'conversations'
  const [modalOpen, setModalOpen] = useState<bool>(false)

  const closeModal = () => {
    setModalOpen(false)
  }

  const openModal = () => {
    setModalOpen(true)
  }

  return (
    <div style={{ width: "250px" }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey="conversations">Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contacts">Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey="conversations">
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey="contacts">
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className='p2 border-top border-right small'>
          Your ID is <span className="text-muted">{id}</span>
        </div>

        <Button variant='success' className='rounded-0' onClick={openModal}>
          New {converIsOpen ? 'conversation' : 'contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {converIsOpen ? 
        <NewConversationModal closeModal={closeModal} /> :
        <NewContactModal closeModal={closeModal} />}
      </Modal>
    </div>
  );
};

export default Sidebar;
