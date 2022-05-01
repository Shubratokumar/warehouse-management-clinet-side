import React from 'react';
import { useParams } from 'react-router-dom';

const ManageInventory = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Manage your inventory:{id}</h2>
        </div>
    );
};

export default ManageInventory;