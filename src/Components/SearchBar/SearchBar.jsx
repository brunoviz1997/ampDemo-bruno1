import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

// const SearchFunctionality = (item) => {
//   console.log("The item on the searchbar is: ", item)
// }

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState("");
  console.log("This is the state of the search item:", searchItem);
  return (
    <Paper>
      
       <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
         <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Product"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={event => setSearchItem(event.target.value)}
            // onChange={event => SearchFunctionality(setSearchItem(event.target.value))}

      />
      </IconButton>

    </Paper>
  );
}

export default Searchbar;