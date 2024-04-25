import React, { useEffect, useState } from 'react';

function ContactData() {
    // State to store form data
    const [formData, setFormData] = useState([]);

    // Retrieve form data from localStorage on component mount
    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem('formData');
        if (dataFromLocalStorage) {
            setFormData(JSON.parse(dataFromLocalStorage));
        }
    }, []);

    // Function to delete data by ID
    const handleDelete = (id) => {
        const updatedData = formData.filter((data, index) => index !== id);
        setFormData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    };

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Message</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.fullname}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.message}</td>
                            <td><button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    );
}

export default ContactData;
