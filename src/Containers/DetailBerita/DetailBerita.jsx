import React, { Component } from 'react';
import axios from 'axios';
import '../../css/style.css';

class DetailBerita extends Component {
  state = {
    data: [],
    notLoading: false
  };

  componentDidMount() {
    console.log(this.props.match);
    axios
      .get(
        'https://id.techinasia.com/wp-json/techinasia/3.0/posts/' +
          this.props.match.params.slug
      )
      .then(res => {
        this.setState({
          data: res.data,
          notLoading: true
        });
      });
  }
  render() {
    return (
      <div
        style={{
          marginLeft: '10%',
          marginRight: '10%',
          paddingTop: '10%'
        }}>
        {this.state.notLoading ? (
          <div
            dangerouslySetInnerHTML={{
              __html: this.state.data.posts[0].content
            }}
          />
        ) : (
          <h1> Loading DetailBerita </h1>
        )}
      </div>
    );
  }
}

export default DetailBerita;
