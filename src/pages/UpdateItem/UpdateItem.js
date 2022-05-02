import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Manage your inventory:{id}</h2>
        </div>
    );
};

export default UpdateItem;