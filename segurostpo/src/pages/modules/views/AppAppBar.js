import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import classNames from "classnames";
import Poppers from "@material-ui/core/Popper";
import Button from "../components/CustomButtons/Button.js";
import Person from "@material-ui/icons/Person";
import Hidden from "@material-ui/core/Hidden";


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 0,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.info.dark,
  },
  icon: {
    width: 64,
    height: 56,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary,
    },
  },
  icons: {
    display: 'flex',
  },
});

function AppAppBar(props) {
  //const { isAuthenticated } = useAuth0();
  const { classes } = props;
  /* const [openNotification, setOpenNotification] = React.useState(null); */
  const [openProfile, setOpenProfile] = React.useState(null);

  /* const handleClickNotification = (event) => {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  }; */
  /* const handleCloseNotification = () => {
    setOpenNotification(null);
  }; */
  const handleClickProfile = (event) => {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  const handleCloseProfile = () => {
    setOpenProfile(null);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <a href="http://localhost:3000/" className={classes.icon}>
            <img
              src="/static/themes/onepirate/TPO_Logo.png"
              alt="Home"
            />
          </a>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="http://localhost:3000/"
          >
            {'TPO Seguros'}
          </Link>
          <div className={classes.right}>

                  <Link
                    color="inherit"
                    variant="h6"
                    underline="none"
                    className={classes.rightLink}
                    href={'http://localhost:3000/ingresar'}
                  >
                    {'Ingresar'}
                  </Link>
                  <Link
                    variant="h6"
                    underline="none"
                    className={clsx(classes.rightLink, classes.linkSecondary)}
                    href="http://localhost:3000/contacto"
                  >
                    {'Contacto'}
                  </Link>
                  <Button
                    variant="h6"
                    underline="none"
                    className={clsx(classes.rightLink, classes.linkSecondary)}
                    onClick={handleClickProfile}
                  >
                    <Person className={classes.icons} />
                    <Hidden mdUp implementation="css">
                      <p className={classes.linkText}>Profile</p>
                    </Hidden>
                  </Button>
                    <Poppers
                      open={Boolean(openProfile)}
                      anchorEl={openProfile}
                      transition
                      disablePortal
                      className={
                        classNames({ [classes.popperClose]: !openProfile }) +
                        " " +
                        classes.popperNav
                      }
                    >
                      {({ TransitionProps, placement }) => (
                      <Grow
                      {...TransitionProps}
                        id="profile-menu-list-grow"
                      >
                        <Paper>
                          <ClickAwayListener >
                            <MenuList role="menu">
                              <MenuItem
                                color="inherit"
                                variant="h6"
                                underline="none"
                                className={classes.dropdownItem}
                              >
                                <Link
                                  href="http://localhost:3000/perfil"
                                  align="center"
                                >
                                  Mis datos
                                </Link>
                              </MenuItem>
                              <MenuItem
                                onClick={handleCloseProfile}
                                className={classes.dropdownItem}
                              >
                                <Link
                                  href="http://localhost:3000/"
                                  align="center"
                                >
                                  Cerrar sesión
                                </Link>
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                  )}
                </Poppers>
          </div>
          
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
