import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useNavigate } from 'react-router-dom-next';
const options = [
  { name: 'All', path: '/' },
  { name: 'Client1', path: '/client1' },
  { name: 'Client2', path: '/client2' },
  { name: 'Client3', path: '/client3' },
];

const Navbar = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedEl, setSelectedEl] = useState('All');
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const goToPage = (event) => {
    setSelectedEl(event.target.attributes.data.value);
    setOpen(false);
    const linkInfo = options.filter((obj) => {
      return (
        obj.name === event.target.attributes.data.value
      );
    });
    navigate(`/${linkInfo[0].path}`);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.name}
            selected={option.name === selectedEl}
            data={option.name}
            onClick={goToPage}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};
export default Navbar;
