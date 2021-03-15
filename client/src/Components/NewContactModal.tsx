import React, { useRef, FormEvent } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useContacts } from '../contexts/ContactsProvider';

const NewContactModal: React.FC<{ closeModal: () => void }> = ({
  closeModal,
}) => {
  const idRef: any = useRef();
  const nameRef: any = useRef();
  const { createContact }: any = useContacts()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit" variant="outline-success">
            Create
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewContactModal;
