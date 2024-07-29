import React from 'react';
import Button from '@mui/material/Button';


const DeleteButton = ({ hasName, row, onDelete }) => {

    if (!hasName) return null;

    const removeHero = async (e) => {
        onDelete( row.hero_id )
      }

    return (
        <Button variant="outlined" color='error' disableElevation onClick={removeHero}>
            Eliminar
        </Button>
    );
};

export default DeleteButton;
