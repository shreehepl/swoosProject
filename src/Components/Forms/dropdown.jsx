import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import SubmitButton from './submitButton'; // Import the SubmitButton component
import { useNavigate } from 'react-router-dom';

export default function ComboBox({onChange}:any) {  
  const [filmData, setFilmData] = useState([]);
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate(); // Access the navigate function

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
    onChange(newInputValue)
  };

  const handleAddItem = async () => {
    if (inputValue.trim() !== '') {
      const newItem = { description: inputValue.trim() };
      setFilmData([...filmData, newItem]);
      setValue(newItem);
      setInputValue('');

      try {
        await axios.post('http://localhost:8080/api/post', { description: newItem.description });
        console.log('Item added successfully');
      } catch (error) {
        console.error('Error adding item:', error);
      }
    }
  };

  const handleEdit = (option) => {
    // Implement edit functionality
    console.log('Edit:', option);
  };

  const handleDelete = async (option) => {
    // Implement delete functionality
    console.log('Delete:', option);
    try {
      await axios.delete(`http://localhost:8080/api/reason/${option.dropdownId}`);
      const updatedData = filmData.filter(item => item.id !== option.id);
      setFilmData(updatedData);
      setValue(null); // Reset the selected value if deleted
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/get');
        setFilmData(response.data);
      } catch (error) {
        console.error('Error fetching dropdown data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Autocomplete
        id="combo-box-demo"
        options={filmData}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={handleInputChange}
        sx={{ width: 220, minHeight: '20px' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select"
            size ="small"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {params.InputProps.endAdornment}
                  <button onClick={handleAddItem}>Add</button>
                </>
              ),
            }}
          />
        )}
        PaperComponent={({ children }) => (
          <Paper style={{ overflow: 'auto', zIndex: 9999 }}>{children}</Paper>
        )}
        getOptionLabel={(option) => option.description}
        renderOption={(props, option) => (
          <li {...props}>
            {option.description}
            <IconButton size="small" onClick={() => handleEdit(option)}>
              <EditIcon />
            </IconButton>
            <IconButton size="small" onClick={() => handleDelete(option)}>
              <DeleteIcon />
            </IconButton>
          </li>
        )}
      />
    </>
  );
}


