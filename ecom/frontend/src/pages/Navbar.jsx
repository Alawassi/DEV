import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { styled } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import LanguageIcon from '@mui/icons-material/Language'

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuAnchorEl, setMenuAnchorEl] = useState(null)
  const [languageAnchorEl, setLanguageAnchorEl] = useState(null)

  const open = Boolean(anchorEl)
  const menuOpen = Boolean(menuAnchorEl)
  const languageMenuOpen = Boolean(languageAnchorEl)

  const handleAccountClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = (event) => {
    setMenuAnchorEl(event.currentTarget)
  }

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setMenuAnchorEl(null)
    setLanguageAnchorEl(null)
  }

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Logo on the left */}
          <Typography variant="h6" component="div" sx={{ color: '#ffeb3b' }}>
            ShopEase
          </Typography>

          {/* Centered Search Bar */}
          <Paper
            component="form"
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 500,
              mx: 'auto',
              border: '2px solid #ffeb3b',
            }}
          >
            <IconButton
              sx={{ p: '10px' }}
              aria-label="menu"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={menuAnchorEl} open={menuOpen} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Ten</MenuItem>
              <MenuItem onClick={handleClose}>Twenty</MenuItem>
              <MenuItem onClick={handleClose}>Thirty</MenuItem>
            </Menu>

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search products"
              inputProps={{ 'aria-label': 'search products' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {/* Shopping Cart Icon */}
          <IconButton aria-label="cart" sx={{ color: '#ffeb3b' }}>
            <StyledBadge color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>


          {/* Language Icon with Menu */}
          <IconButton
            aria-label="language"
            sx={{ color: '#ffeb3b' }}
            onClick={handleLanguageClick}
          >
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={languageAnchorEl}
            open={languageMenuOpen}
            onClose={handleClose}
          >
            <MenuItem >English</MenuItem>
            <MenuItem >Deutsch</MenuItem>
            <MenuItem >Français</MenuItem>
          </Menu>



          {/* Account Menu on the right */}
          <div>
            <Button
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleAccountClick}
            >
              <AccountCircleOutlinedIcon sx={{ color: '#ffeb3b' }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose} sx={{ color: '#1a237e' }}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ color: '#1a237e' }}>
                My account
              </MenuItem>
              <MenuItem onClick={handleClose} sx={{ color: '#1a237e' }}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
