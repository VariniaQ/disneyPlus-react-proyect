// REACT
import { useState } from 'react';
// REACT DOM
import { Link, useNavigate } from 'react-router-dom';
// CSSS
import './Header.css';
// Material-ui
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Header() {
    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <header className='header-disney'>
            <div className="container-logo">
                <img src="./logo.svg" alt="" />
            </div>
            <nav>
                <ul>
                    <li><Link to='/'><HomeIcon fontSize={'large'} /> Home</Link></li>
                    <li><Link to='/movies'><LocalMoviesIcon fontSize={'large'} />Movies</Link></li>
                    <li><Link to='/series'><LiveTvIcon fontSize={'large'} />Series</Link></li>
                    <li><Link to='/search'><SearchIcon fontSize={'large'} />Search</Link></li>
                    <li><Link to='/whishlist'><StarIcon fontSize={'large'} />Whishlist</Link></li>
                    <li><Link to='/originals'><AddIcon fontSize={'large'} />Originals</Link></li>
                </ul>
            </nav>
            <div className='userAvatar'>
                <button
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <img src="./avatar.png" alt="alkemy-avatar" />
                </button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem
                        onClick={handleClose}>
                        <p onClick={handleLogout}>Logout</p>
                    </MenuItem>
                </Menu>
            </div>
        </header >
    )
}

export default Header;
