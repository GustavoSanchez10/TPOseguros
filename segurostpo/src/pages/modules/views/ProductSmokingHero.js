import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(9),
  },
  button: {
    border: '4px solid currentColor',
    borderRadius: 0,
    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  buoy: {
    width: 60,
  },
});

function ProductSmokingHero(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Button className={classes.button} href="http://localhost:3000/nosotros">
        <Typography variant="h4" component="span">
          Conoce más acerca de nosotros
        </Typography>
      </Button>
       
      <Typography variant="h5" fontweight="bold" className={classes.link}>
        Estamos para ayudarte.
      </Typography>
      <img
        src="/static/themes/onepirate/producBuoy.svg"
        className={classes.buoy}
        alt="buoy"
      />
      <Typography variant="h6" className={classes.link}>
        TPO
      </Typography>
    </Container>
  );
}

ProductSmokingHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductSmokingHero);
