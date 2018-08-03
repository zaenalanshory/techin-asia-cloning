import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 700
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
};

const KartuSingular = props => {
  console.log(props.data.post);
  const { classes } = props;

  return (
    <div>
      {props.data.posts.map((datum, key) => {
        return (
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={datum.seo.image}
              title={datum.seo.title}
            />
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {datum.seo.title}
              </Typography>
              <Typography component="p">{datum.seo.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                onPress={this._onPressDetail}
                title="OpenDetail"
                size="small"
                color="primary">
                Read More
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(KartuSingular);
