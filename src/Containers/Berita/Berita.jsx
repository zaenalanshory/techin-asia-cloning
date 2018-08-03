import React, { Component } from 'react';
import Header from '../../Components/Header/Header';
import Kartu from '../../Components/Kartu/Kartu';
import Bottom from '../../Components/Bottom/Bottom';
import Aux from '../../Hoc/Auxiliary';
import Grid from '@material-ui/core/Grid';
import Asside from '../../Components/Asside/Asside';

const styles = theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`
  }
});

class Berita extends Component {
  render() {
    return (
      <Aux>
        <Header />
        <Grid container spacing={10}>
          <Grid align="center" item lg={8} xs={12}>
            <Kartu />
          </Grid>
          <Grid item lg={4} xs={12}>
            <Asside />
          </Grid>
        </Grid>

        <Bottom />
      </Aux>
    );
  }
}

export default Berita;
