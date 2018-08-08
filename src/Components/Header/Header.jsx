import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import '../../css/style.css';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mailFolderListItems, otherMailFolderListItems } from './Header';
import NestedList from './NestedList';

const styles = {
  root: {
    position: 'sticky',
    zIndex: 999,
    top: '0',
    width: '100%',
    marginBottom: '5%'
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const sideList = (
      <div style={{ paddingTop: '10%' }} className={classes.list}>
        <NestedList />
        <Divider />
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List />
        <Divider />
        <List />
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar className="x" position="static">
          <Toolbar>
            <IconButton
              onClick={this.toggleDrawer('left', true)}
              className={classes.menuButton}
              color="#A5A5A5"
              aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="#A5A5A5"
              className={classes.flex}>
              <a
                class="logo"
                data-event-category="Navigation"
                data-event-action="Click"
                data-event-label="Logo (header)"
                href="/">
                <svg
                  viewBox="0 0 36 25"
                  width="36"
                  height="25"
                  class="jsx-2263228438 jsx-3109345124 logo-tia">
                  <path
                    d="M25.3 10.2c.3.2.6 0 .5-.4L24.2 7h-.6l-10 17.7c-.4.4-1 .4-1.2 0L9 19l-.2-.8v-5c0-.5-.2-.8-.5-1l-8-7c-.5-.3-.3-1 .4-1H15l3.5 2c.2.2.2.4 0 .5l-1.4 2.6c0 .2-.2.3-.3.2L14 8l-.6-.2H9.7c-.3 0-.4.4-.2.6l2.5 2c.3.3.4.7.4 1V18c0 .4.5.5.7.2L23.5.2c.2-.3 1-.3 1 0l10.7 18.5c.5.6-.2 1.2-.8 1L22 12.4c-.2 0-.3-.3-.2-.4l1.5-2.5c0-.2.3-.2.5-.2l1.5 1z"
                    class="jsx-2263228438 jsx-3109345124"
                  />
                </svg>
                <svg
                  viewBox="0 0 101 14"
                  width="101"
                  height="14"
                  class="jsx-2263228438 jsx-3109345124 logo-text">
                  <title class="jsx-2263228438 jsx-3109345124">
                    Tech In Asia
                  </title>
                  <path
                    d="M94.4 4l1.4 4.3h-3L94.5 4zM88 13h3.4l.8-2.2h4.3l.8 2.2h3.4L96 .5h-3.3L88 13zm-4 0h3.4V.5H84V13zM73 8.7c0 3 2.4 4.3 5.2 4.3 2.6 0 5.2-1 5.2-4 0-2.2-1.8-3-3.5-3.5C78 5 76.3 5 76.3 4c0-.8 1-1 1.5-1 1 0 2 .3 2 1.4h3c0-2.7-2.4-4-4.8-4-2.3 0-5 1-5 3.8 0 2.2 2 3 3.6 3.4 1.8.5 3.5.7 3.5 1.8 0 1-1 1.2-2 1.2-1.3 0-2.2-.5-2.2-2h-3zM67.3 4l1.4 4.3h-3L67.4 4zM61 13h3.3l.8-2.2h4.4l.8 2.2h3.4L69 .5h-3.4L61 13zm-11 0h1.3V2.4L58.6 13H60V.5h-1.2V11L51.4.6H50V13zm-2.6 0h1.2V.5h-1.2V13zM35 13h3.3V8h4.3v5h3.2V.5h-3.2V5h-4.3V.6H35V13zm-1-8C34 2.2 31.3.5 28.7.5c-3.6 0-6 2.8-6 6.3 0 3.4 2.4 6.2 6 6.2 3 0 5.3-1.8 5.5-5h-3c-.2 1.5-1 2.3-2.5 2.3-2 0-2.8-1.8-2.8-3.5 0-1.8.8-3.6 2.8-3.6 1.3 0 2.3.6 2.4 1.8h3zm-21.7 8h10.2v-2.8h-7V7.8h6.2V5.3h-6V3h6.6V.6h-10V13zM11.3.5H.8v2.8h3.7V13h3.3V3.3h3.7V.5z"
                    class="jsx-2263228438 jsx-3109345124"
                  />
                </svg>
              </a>
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit">
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onClose={this.handleClose}>
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}>
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
