import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Link } from 'react-router-dom';

const styles = {
  root: {
    position: 'fixed',
    width: '100%',
    bottom: '0px'
  }
};

class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}>
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/Teknologi"
          label="Teknologi"
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/DetailBerita"
          label="DetailBerita"
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(SimpleBottomNavigation);
