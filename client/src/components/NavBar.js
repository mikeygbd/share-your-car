import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { connect } from 'react-redux'
import navCss from '../styles/navbar.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  grow: {
    flexGrow: 1,
  },
  textField: {
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 200,
},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));




const AdapterLink = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

const NavBar = ({ currentUser }) => {

  const [value, setValue] = React.useState(0);
  const classes = useStyles();
 const [anchorEl, setAnchorEl] = React.useState(null);
 const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

 const isMenuOpen = Boolean(anchorEl);
 const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

 function handleProfileMenuOpen(event) {
   setAnchorEl(event.currentTarget);
 }

 function handleMobileMenuClose() {
   setMobileMoreAnchorEl(null);
 }

 function handleMenuClose() {
   setAnchorEl(null);
   handleMobileMenuClose();
 }

 function handleMobileMenuOpen(event) {
   setMobileMoreAnchorEl(event.currentTarget);
 }

 function handleSignupClick(e) {
   e.preventDefault()

   const url = (window.location.href + 'signup')
   return(
     window.location.href = url
   )
 }

 function handleChange(event, newValue) {
   setValue(newValue);
 }

 const menuId = 'primary-search-account-menu';
 const renderMenu = (
   <Menu
     anchorEl={anchorEl}
     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
     id={menuId}
     keepMounted
     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     open={isMenuOpen}
     onClose={handleMenuClose}
   >
     <MenuItem label='My Profile' to='/my_profile' component={Link}>MY Profile</MenuItem>

   </Menu>
 );

 const mobileMenuId = 'primary-search-account-menu-mobile';
 const renderMobileMenu = (
   <Menu
     anchorEl={mobileMoreAnchorEl}
     anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
     id={mobileMenuId}
     keepMounted
     transformOrigin={{ vertical: 'top', horizontal: 'right' }}
     open={isMobileMenuOpen}
     onClose={handleMobileMenuClose}
   >
     <MenuItem>
       <IconButton aria-label="Show 4 new mails" color="inherit">
         <Badge badgeContent={4} color="secondary">
           <MailIcon />
         </Badge>
       </IconButton>
       <p>Messages</p>
     </MenuItem>
     <MenuItem>
       <IconButton aria-label="Show 11 new notifications" color="inherit">
         <Badge badgeContent={11} color="secondary">
           <NotificationsIcon />
         </Badge>
       </IconButton>
       <p>Notifications</p>
     </MenuItem>
     <MenuItem onClick={handleProfileMenuOpen}>
       <IconButton
         aria-label="Account of current user"
         aria-controls="primary-search-account-menu"
         aria-haspopup="true"
         color="inherit"
       >
         <AccountCircle />
       </IconButton>
       <p>Profile</p>
     </MenuItem>
   </Menu>
 );


  return (
    <div className={classes.grow}>
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <strong>{ currentUser ? `Wlecome, ${currentUser.firstname} ${currentUser.lastname}` : "" }</strong>
          </Typography>
          <br />
          <div className="login-logout-btn">

          </div>
          <div className="tabs">
            {!currentUser ? <div className="navbar-space"></div> : null}
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>

            <Tab centered='true' label='Home'  to='/' component={Link} />
            { currentUser ? <Tab centered='true' label='My Cars'  to='/my_cars' component={Link} /> : null}
            <Tab centered='true' label='Cars'  to='/cars' component={Link} />
            { currentUser ? <Tab centered='true' label='Profile'  to='/my_profile' component={Link} /> : null}
            { currentUser ? <Tab centered='true' label='Logout'  to='/logout' component={Link} /> : <Tab centered='true' label='Login'  to='/login' component={Link} />}
            { currentUser ? null : <Tab centered='true' label='Sign Up'  to='/signup' component={Link} />}

          </Tabs>
          </div>


          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="Account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

    </div>

      </div>



  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
