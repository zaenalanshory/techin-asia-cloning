import React, { Component } from 'react';
import axios from 'axios';
import KartuSingular from '../../Components/Kartu/KartuSingular/KartuSingular';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';

class Kartu extends Component {
  state = {
    data: [],
    Loader: false
  };
  componentDidMount() {
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15'
      )
      .then(response => {
        console.log(response);
        this.setState({
          data: response.data,
          Loader: true
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.Loader ? (
          //lempar data ke Kartu singular
          <KartuSingular data={this.state.data} />
        ) : (
          <CircularProgress style={{ marginTop: '200px' }} size={50} />
        )}
      </div>
    );
  }
}

export default Kartu;
