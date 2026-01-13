import { IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu'; 

import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      
      <a href="#hero">
        <img src={logo} alt="FruitX Logo" className="nav-logo" />
      </a>

      <ul className="nav-links">
        <li><a href="#hero">Início</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#products">Produtos</a></li>
        <li><a href="#depoimentos">Depoimentos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>

      <div className="nav-icons">
        <div className="menu-icon-mobile">
            <IconButton sx={{ color: 'white' }}>
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

    </nav>
  );
};

export default Navbar;