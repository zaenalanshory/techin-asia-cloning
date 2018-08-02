import React, { Component } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

class NavigationBottom extends Component {
  render() {
    return (
      <BottomNavigation
        val={this.props.value}
        onChange={this.props.handleChange}
        showLabels
        style={{
          position: 'fixed',
          bottom: '0px',
          width: '100%'
        }}>
        <BottomNavigationAction label="News" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Discussion" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Account" icon={<LocationOnIcon />} />
      </BottomNavigation>
    );
  }
}

export default NavigationBottom;
