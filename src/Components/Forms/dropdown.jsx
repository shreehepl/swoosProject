import React, { useState, useEffect } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import axios from 'axios';
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
        sx={{ width: 180, minHeight: '20px' }}
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
      />
    </>
  );
}
