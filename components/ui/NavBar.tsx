import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
  
export const Nabvar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'>
          <MenuOutlinedIcon/>
        </IconButton>
        <Typography variant='h6'>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  )
}
