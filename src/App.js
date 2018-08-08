import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Berita from './Containers/Berita/Berita';
import DetailBerita from './Containers/DetailBerita/DetailBerita';
import Teknologi from './Containers/Teknologi/Teknologi';
import Bottom from './Components/Bottom/Bottom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Berita} />
          <Route path="/DetailBerita" component={DetailBerita} />
          <Route path="/Teknologi" component={Teknologi} />
          <Route path="/:slug" component={DetailBerita} />
        </Switch>
        <Switch>
          <Route path="/" component={Bottom} />
        </Switch>
      </div>
    );
  }
}

export default App;

/* 
class Berita extends Component {
  render(){
    return(
      
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
} */
{
  /* <div
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
  
   */
}
/* state = {
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
                
                 */
