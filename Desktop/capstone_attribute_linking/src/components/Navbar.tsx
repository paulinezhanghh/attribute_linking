import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';

export const Navbar = () => {
  return (
    <AppBar position="static" color="default" elevation={1} className="border-b border-gray-200">
      <Toolbar className="justify-between">
        <div className="flex items-center">
          <IconButton edge="start" color="inherit" aria-label="menu" className="mr-2">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="font-medium">
            Catalogue
          </Typography>
        </div>
        
        <div className="flex space-x-4">
          <Button color="inherit" className="font-medium">Products</Button>
          <Button color="primary" className="font-medium">Showcase</Button>
          <Button color="inherit" className="font-medium">Upload</Button>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button color="inherit">Support</Button>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
          <IconButton color="inherit">
            <LanguageIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}; 