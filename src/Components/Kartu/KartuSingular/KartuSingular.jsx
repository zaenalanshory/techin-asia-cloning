import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';

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
  //GET Data dari Kartu
  console.log(props.data.post);
  const { classes } = props;

  return (
    <div>
      {props.data.posts.map((datum, key) => {
        return (
          <Grid
            style={{ paddingLeft: '10%', paddingRight: '5%' }}
            container
            spacing={10}>
            <Grid align="center" item lg={4} xs={12}>
              <CardMedia
                className={classes.media}
                image={datum.seo.image}
                title={datum.seo.title}
              />
            </Grid>
            <Grid align="left" item lg={8} xs={12}>
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {datum.seo.title}
                </Typography>
                <Typography component="p">{datum.seo.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  className={classes.button}>
                  <Link to={`/${datum.slug}`} style={{ color: 'white' }}>
                    Read More ...
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}>
                  Primary
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
};

export default withStyles(styles)(KartuSingular);
