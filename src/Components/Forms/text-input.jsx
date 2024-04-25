import React, { useEffect, useState } from 'react';
import { TextField, FormHelperText } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import { FormLabel } from './form-label';
export default function TextInput({ rows, multiline, mandatory, width, index, errortxt, type, InputEndAdornmentLable, name, parentFiled, isDisabled, value, label, onValueChange }: any) {
    const [
        inputValue,
        setInputValue
    ] = useState('');
    const [
        errorText,
        setErrorText
    ] = useState('');
 
 
    useEffect(
        () => {
            setInputValue(value || '');
            console.log(label)
        },
        [value]
    );
    useEffect(
        () => {
 
            setErrorText(errortxt || '');
        },
        [errortxt]
    );
 
    return (
        <div >
            <FormLabel label={label} mandatory={mandatory} />
            <TextField
                rows={rows}
                size="small"
                sx={{
                    width: '90%',
                    '& .MuiInputBase-root ': {
                        borderRadius: '4px',
                        alignItems:'center',
                  
                        '&::placeholder': {
                            fontSize: '13px',
                            textAlign: 'left',
                            fontWeight: '600',
                        },
                        boxSizing: 'border-box',bgcolor:'#FFFFFF'
                    },
                }}
 
                id="input-with-icon-textfield"
                disabled={isDisabled}
                multiline={multiline}
                name={name}
                type={type}
                autoComplete='chrome-off'
                //onBlur={validateField}
                value={inputValue}
                onChange={(event: any) => {
                    setInputValue(event.target.value);
                    onValueChange(event)
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            {InputEndAdornmentLable}
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}