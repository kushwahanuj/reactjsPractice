import React, { useEffect, useState } from 'react';

export default function ContactData() {
    const [formData, setFormData] = useState([]);

    // fetching form data from localStorage on component mount
    useEffect(() => {
        const dataFromLocalStorage = localStorage.getItem('formData');
        if (dataFromLocalStorage) {
            setFormData(JSON.parse(dataFromLocalStorage));
        }
    }, []);

    //  to delete local storage data by ID
    const handleDelete = (id) => {
        const updatedData = formData.filter((_, index) => index !== id);
        setFormData(updatedData);
        localStorage.setItem('formData', JSON.stringify(updatedData));
    };

    // for search functionality
    const [search, setSearch] = useState('');

    return (
        <>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="btn btn-outline-success" type="button">Search</button>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Message</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.filter(data => {
                        return search.trim() === '' ||
                            data.fullname.toLowerCase().includes(search.toLowerCase()) ||
                            data.email.toLowerCase().includes(search.toLowerCase()) ||
                            data.phone.toLowerCase().includes(search.toLowerCase());
                    }).map((data, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.fullname}</td>
                            <td>{data.email}</td>
                            <td>{data.phone}</td>
                            <td>{data.message}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}