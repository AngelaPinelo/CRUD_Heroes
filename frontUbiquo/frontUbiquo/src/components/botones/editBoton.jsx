import React from 'react';
import Button from '@mui/material/Button';


const EditButton = ({ hasName, row, onEdit }) => {

    if (!hasName) return null;

    const editHero = async (e) => {
        onEdit( row.hero_id )
      }

    return (
        <Button variant="outlined" color='primary' disableElevation onClick={editHero}>
            Editar
        </Button>
    );
};

export default EditButton;
