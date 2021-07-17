import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          width: 175,
          height: 15
      }}
  />
);
const styles = (theme) => ({
  
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary,
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(10),
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6, 5),
    opacity: 1,
  },
  image: {
    height: 75,
    opacity: 1,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -450,
    opacity: 0.3,
  },
  toptitle1: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  toptitle2: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(9),
  },
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvysLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" className={classes.toptitle1}>
          ¿Porque elegirnos?
        </Typography>
        <Typography variant="h4" className={classes.toptitle2}>
          {'Somos expertos en seguros'}
        </Typography>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues1.svg"
                alt="suitcase"
              />
               
              <Typography variant="h5" align="center">
                {'Somos un broker de seguros digital, pioneros en Latinoamérica.'}
              </Typography>
               
              <ColoredLine color="#2E2FF5" />
               
              <Typography variant="h6" align="center">
                {'+35.000'}
              </Typography>
              <Typography variant="h6" align="center">
                {'Consultas resueltas por año.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues2.svg"
                alt="graph"
              />
               
              <Typography variant="h5" align="center">
                {'Nacimos en 2010 con el objetivo de hacer transparente la contratación de seguros.'}
              </Typography>
               
              <ColoredLine color="#2E2FF5" />
               
              <Typography variant="h6" align="center">
                {'+ 5.500'}
              </Typography>
              <Typography variant="h6" align="center">
                {'Siniestros resueltos por año.'}
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/themes/onepirate/productValues3.svg"
                alt="clock"
              />
               
              <Typography variant="h5" align="center">
                {'Asesoramos a más de un millón de personas en distintas partes del país.'}
              </Typography>
               
              <ColoredLine color="#2E2FF5"/>
               
              <Typography variant="h6" align="center">
                {'95%'}
              </Typography>
              <Typography variant="h6" align="center">
                {'Clientes satisfechos'}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductValues);
