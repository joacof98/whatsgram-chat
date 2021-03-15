import React, {useRef, FormEvent} from "react";
import { Container, Form, Button } from "react-bootstrap";
import {v4 as uuidV4} from 'uuid';

const Login: React.FC<{onSubmitId: (ref: string)=>void}> = ({onSubmitId}) => {
  //useRef: store mutable info. during all lifecycle of component.
  const refId: any = useRef();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmitId(refId.current.value)
  }

  const createNewId = () => {
    onSubmitId(uuidV4())
  }

  return (
    <Container
      className="align-items-center d-flex"
      style={{ height: "100vh" }}
    >
      <Form onSubmit={handleSubmit} className="w-100">
        <h1 style={{ color: "#2cdb5b" }}>WhatsGram</h1>
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter ID"
            ref={refId}
            required
          />
        </Form.Group>
        <Button type="submit" variant="outline-success" className="mr-2">
          Enter
        </Button>
        <Button onClick={createNewId} variant="outline-secondary">
          Create new Id
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
