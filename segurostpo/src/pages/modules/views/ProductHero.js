import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'http://fotos.subefotos.com/a2a9150f849d882edf5f020058019c10o.png';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#ffffff', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 300,
  },
  h5: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h3">
        Tu seguro correcto
      </Typography>
      <Typography color="inherit" align="center" variant="h4">
        en el momento justo
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        ¿Aún no eres cliente?
      </Typography>
      <Button
        color="Primary"
        variant="contained"
        size="medium"
        className={classes.button}
        component="a"
        href="http://localhost:3000/registro"
      >
        Registrarse
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Descubre la experiencia
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
