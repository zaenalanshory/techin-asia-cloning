import React, { Component } from 'react';
import Kartu from '../../Components/Kartu/Kartu';
import NavigationBottom from '../../Components/Navigation/NavigationBottom/NavigationBottom';
import HeaderNavigation from '../../Components/Navigation/HeaderNavigation/HeaderNavigation';
import axios from 'axios';

class Berita extends Component {
  state = {
    value: 0,
    data: [],
    isLoading: false
  };

  componentDidMount() {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
      )
      .then(resp => {
        this.setState({
          data: resp.data,
          isLoading: true
        });
      })
      .catch(err => {});
  }

  render() {
    return (
      <div>
        <HeaderNavigation />
        {this.state.loading ? <Kartu {...this.state.data} /> : <h1>Loading</h1>}
        <NavigationBottom val={this.state.value} />
      </div>
    );
  }
}

export default Berita;
