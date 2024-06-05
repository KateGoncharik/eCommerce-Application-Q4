import { FC, useState } from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const SizeSelect: FC<{ setter: (value: string) => void }> = ({ setter }) => {
  const [size, setSize] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setSize(event.target.value);
    setter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="size-select-label">Size</InputLabel>
        <Select
          className="w-36"
          id="size-select"
          label="Size"
          labelId="size-select-label"
          onChange={handleChange}
          value={size}
        >
          <MenuItem value={'small'}>Small</MenuItem>
          <MenuItem value={'medium'}>Medium</MenuItem>
          <MenuItem value={'big'}>Big</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
