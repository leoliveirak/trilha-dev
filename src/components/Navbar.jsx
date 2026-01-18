import { useState } from 'react';
import { IconButton, Drawer, List, ListItem, ListItemText, ListItemButton} from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu'; 
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (e, id) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'hero' },
    { label: 'Sobre', id: 'about' },
    { label: 'Produtos', id: 'products' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <nav className="navbar-container"> 
      <a href="#hero">
        <img src={logo} alt="FruitX Logo" className="nav-logo" />
      </a>

      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.id} >
            <a 
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-icons">
        <div className="menu-icon-mobile">
            <IconButton onClick={handleDrawerToggle}sx={{ color: 'white' }}>
                <MenuIcon />
            </IconButton>
        </div>

        <IconButton sx={{ color: 'white' }}>
          <ShoppingCartOutlinedIcon />
        </IconButton>
        
        <div style={{ display: 'flex' }} className="desktop-only-icon">
            <IconButton sx={{ color: 'white', display: { xs: 'none', md: 'flex' } }}>
                <PersonOutlineOutlinedIcon />
            </IconButton>
        </div>
      </div>

      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: { width: '250px', backgroundColor: '#111', color: 'white' }
      }}
      >
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
          <IconButton onClick={handleDrawerToggle} sx={{color: 'white'}}>
            <CloseIcon/>
          </IconButton>
        </div>

        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.id}
              button
              onClick={(e) => handleNavClick(e, item.id)}
            >
              <ListItemButton>
                <ListItemText primary={item.label} />
              </ListItemButton>

            </ListItem>))}
        </List>
      </Drawer>

    </nav>
  );
};

export default Navbar;