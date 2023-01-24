import { FormControl, Input, InputAdornment, InputLabel, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  return (
    <FormControl variant="standard" className="grow m-40 w-2" style={{ maxWidth: '500px' }}>
      <Input
        id="input-with-icon-adornment"
        sx={{
          backgroundColor: 'white',
          borderRadius: '25px',
          padding: '0 10px'
        }
        }
        startAdornment={
          < InputAdornment position="start" >
            <SearchIcon />
          </InputAdornment >
        }
      />
    </FormControl >
  )
}