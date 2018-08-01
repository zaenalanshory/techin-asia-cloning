import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    value: 0,
    isLoading: true,
    data: {},
    isDetailMode: false,
    dataDetail: {}
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleDetailClick = (post) => {
    this.setState({
      isDetailMode: true,
      dataDetail: post
    })
  }

  componentDidMount(){
    axios.get('https://id.techinasia.com/wp-json/techinasia/3.0/posts?page=1&per_page=15')
         .then((resp)=>{
            console.log(resp.data);
            this.setState({
              data: resp.data,
              isLoading: false
            })
         })
         .catch((err)=>{

         })
  }

  render() {
    return ( 
      <div>
        <div
          style={{
            marginBottom: "56px",
            padding: "16px"
          }}>

          
          {this.state.isLoading && <h1 align="center">Loading ...</h1>}
          {!this.state.isLoading && !this.state.isDetailMode && this.state.data.posts.map((post)=>{
            
            return(
              <Berita 
                title={post.title}
                image={post.featured_image.source}
                handleClick={()=>{this.handleDetailClick(post)}}
              />
            )
          })}

          {this.state.isDetailMode &&
              <BeritaDetail
                data={this.state.dataDetail}
              />
          }

        </div>
        
        <BottomNavigation
          value={this.state.value}
          onChange={this.handleChange}
          showLabels
          style={
            {position: "fixed",
            bottom: "0px",
            width: "100%"}
          }
          >
          <BottomNavigationAction label="News" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Discussion" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Account" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default App;


class Berita extends Component {
  render(){
    return(
      <Card
        style={{
          marginBottom: "16px",
        }}>
          <CardMedia
            image={this.props.image}
            title="Contemplative Reptile"
            style={{height: 150}}
          />
          <CardContent>
            <Typography dangerouslySetInnerHTML={{ __html: this.props.title }} gutterBottom variant="headline" component="h2">
            </Typography>
            <Typography component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button 
              onClick={this.props.handleClick}
              size="small" 
              color="primary">
              Read More
            </Button>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
    )
  }
}

class BeritaDetail extends Component {
  render(){
    return(
      <div dangerouslySetInnerHTML={{ __html: this.props.data.content }}>

      </div>
    )
  }
}