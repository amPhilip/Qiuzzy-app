import { Box, FormControl,InputLabel, MenuItem,Select } from '@mui/material'
import React, { useState } from 'react'

const SelectOption = (props) => {
    const [value, setValue] = useState('')
    const {label} = props;

    const handleChange = (e) => {
        setValue(e.target.value)
    }

  return (
    <Box mt={3} width="100%">
        <FormControl size="small" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                <MenuItem>Option1</MenuItem>
                <MenuItem>Option2</MenuItem>
                <MenuItem>Option3</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}

export default SelectOption