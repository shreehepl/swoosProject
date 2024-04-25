import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import axios from 'axios'; 

const SubmitButton = ({ row, SelectedRow }) => {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      
      await axios.post('http://localhost:8080/api/update', {
        mergedId: SelectedRow.mergedId,
        reason: SelectedRow.reason,
        remarks: SelectedRow.remarks,
      });

      const data = {...row,SelectedRow }
console.log(data,'data')
      sessionStorage.clear();
      sessionStorage.setItem('updatedRow', JSON.stringify(data));
      navigate('/historyPage');
      window.location.reload();
    } catch (error) {
      // sessionStorage.setItem('updatedRow', JSON.stringify(row));

      console.error('Error submitting data:', error);
    }
  };

  return (
    <Button
      type="button" 
      variant="contained"
      sx={{
        width: '80px',
        height: '32px',
        fontSize: '12px',
        backgroundColor: '#511FBB',
        borderRadius: '4px',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#511FBB',
        },
        '&:focus': {
          outline: 'none',
        },
      }}
      onClick={handleClick}
    >
      SUBMIT
    </Button>
  );
};

export default SubmitButton;
