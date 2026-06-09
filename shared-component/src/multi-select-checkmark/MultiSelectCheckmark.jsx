import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  slotProps: {
    paper: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  },
};

const technologies = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectCheckmark(children) {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl fullWidth size="small">
        <InputLabel id="ora-multiple-checkbox-label">Technologies</InputLabel>
        <Select
          labelId="ora-multiple-checkbox-label"
          id="ora-multiple-checkbox"
          multiple
          size="small"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Technologies" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {technologies.map((technology) => {
            const selected = personName.includes(technology);
            const SelectionIcon = selected ? CheckBoxIcon : CheckBoxOutlineBlankIcon;

            return (
              <MenuItem key={technology} value={technology}>
                <SelectionIcon
                  fontSize="small"
                  style={{ marginRight: 8, padding: 9, boxSizing: 'content-box' }}
                />
                <ListItemText primary={technology} />
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
