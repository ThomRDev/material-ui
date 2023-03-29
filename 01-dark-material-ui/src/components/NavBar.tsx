import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react'
import { ColorModeContext } from '../theme/AppTheme';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function NavBar() {

  const { toggleColorMode } = useContext(ColorModeContext)

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Switch {...label} defaultChecked color='default' onChange={toggleColorMode}  />
        </Toolbar>
      </AppBar>
    </Box>
  );
}