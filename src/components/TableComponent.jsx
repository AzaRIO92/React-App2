import React, { useEffect } from 'react';
import './TableComponent.css';
import { useNavigate } from 'react-router-dom';

const TableComponent = ({ contacts, getContacts, deleteContact }) => {
    const navigate = useNavigate();

    useEffect(() => {
        getContacts();
    }, [getContacts]);

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        deleteContact(id);
    };

    return (
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>
                                <button onClick={() => handleEdit(item.id)}>edit</button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item.id)}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;
