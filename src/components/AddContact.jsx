import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function AddForm({ addContact }) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    if (!name.trim() || !lastName.trim() || !phone.trim() || !email.trim()) {
      alert('Fill all fields');
      return;
    }
    const newContact = { name, lastName, phone, email };
    addContact(newContact);
    navigate('/');
  };

  return (
    <Form className="w-50 m-auto" onSubmit={handleCreate}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Firstname</Form.Label>
        <Form.Control onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter firstname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Enter last name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>E-mail</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Enter phone" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Contact
      </Button>
    </Form>
  );
}

export default AddForm;
