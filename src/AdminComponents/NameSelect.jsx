import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import "../CSS/ListFilter.css"
import { UserList } from './UserList';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function NameSelect({Proffesion,setdatas,ClientName,setClientName}) {

 

  return (
    <div>
      <FormControl className='name-select-box'  >
        <InputLabel className='name-font' id="demo-multiple-name-label"><p>Name</p></InputLabel>
     <UserList Proffesion={Proffesion} ClientName={ClientName} setClientName={setClientName}/>
      </FormControl>
    </div>
  );
}