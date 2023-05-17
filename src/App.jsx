import { useState } from 'react'
import { Box, TextField, Button} from '@mui/material/'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box
      component="form"
      sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1}}
      noValidate
      autoComplete="off"
      >
       <TextField id="outlined-basic" label="Username" variant="outlined" />
       <TextField id="filled-basic" label="Password" variant="outlined" type='password' sx={{ mt: 1}} />
       <Button variant="contained" sx={{ mt: 1 }}>Login</Button>
      </Box>
    </>
  )
}

export default App
