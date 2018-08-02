import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const kartuBanyak = props => {
  console.log(props.data.posts.seo);
  return (
    <Card
      style={{
        marginBottom: '16px'
      }}>
      <CardMedia
        image={props.featured.image}
        title={props.seo}
        style={{ height: 150 }}
      />
      <CardContent>
        <Typography
          dangerouslySetInnerHTML={{ __html: props.seo }}
          gutterBottom
          variant="headline"
          component="h2"
        />
        <Typography component="p">{props.description}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={this.props.handleClick} size="small" color="primary">
          Read More
        </Button>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
};

export default kartuBanyak;
