import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useEffect, useState } from 'react';
import { getAllUser, getUsersByProffesions } from '../Redux/api';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
      
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName === name._id
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

export const UserList = ({Proffesion, ClientName, setClientName }) => {
  const theme = useTheme();
  const [names, setNames] = useState([]);

  const handleChange = (event) => {
    const { value } = event.target;
    setClientName(value);
  };

  useEffect(() => {
  
    getUserData(Proffesion);
  }, [Proffesion]);

  const getUserData = async (Proffesion) => {
    let queryprof;
    if(Proffesion?.length){
      queryprof = Proffesion;
    }
    const { data } = await getUsersByProffesions(queryprof);
    setNames(data);
  };

  return (
    <>
      <Select
        labelId="demo-name-label"
        id="demo-name"
        value={ClientName}
        onChange={handleChange}
        input={<OutlinedInput label="Name"  style={{width:"150px"}}/>}
       
        MenuProps={MenuProps}
        
      >
        {names?.map((name) => (
          <MenuItem
            key={name._id}
            value={name._id}
           
            style={getStyles(name, ClientName, theme)}
          >
            {name.firstName}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};
