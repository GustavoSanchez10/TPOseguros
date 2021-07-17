import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary,
    overflow: 'hidden',
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -480,
    opacity: 0.3,
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  title: {
    marginBottom: theme.spacing(1),
  },
  title2: {
    marginBottom: theme.spacing(8),
  },
  number: {
    fontSize: 30,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.info,
    fontWeight: theme.typography.fontWeightBold,
    opacity: 1,
  },
  image: {
    height: 75,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    opacity: 1,
  },
  button: {
    marginTop: theme.spacing(8),
    opacity: 1,
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h3"
          className={classes.title}
        >
          Nuestro
        </Typography>
        <Typography
          variant="h3"
          className={classes.title2}
          component="h2"
        >
          Compromiso
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>1.</div>
                <img
                  src="/static/themes/onepirate/productHowItWorks1.svg"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Experiencia y trayectoria
                </Typography>
                 
                <Typography variant="h5" align="center">
                Nuestro liderazgo y solvencia nos permiten estar a tu lado cuando nos necesites, siendo tu socio de confianza. 
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>
                <img
                  src="/static/themes/onepirate/productHowItWorks2.svg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Siempre cerca tuyo
                </Typography>
                 
                <Typography variant="h5" align="center">
                Más de 5.000 productores en todo el país te brindarán el mejor asesoramiento para apoyar tus decisiones.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Aseguramos tu futuro
                </Typography>
                 
                <Typography variant="h5" align="center">
                Trabajamos día a día con un único propósito: proteger el futuro de las personas.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
