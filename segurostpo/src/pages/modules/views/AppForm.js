import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../components/Paper';

const styles = (theme) => ({
  root: {
    display: 'flex',
    backgroundImage: 'url(/static/themes/onepirate/appCurvyLines.png)',
    backgroundRepeat: 'repeat',
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 6),
    },
    backgroundImage: 'url(/static/themes/onepirate/appXDNT.png)',
    backgroundRepeat: 'repeat',
  },
});

function AppForm(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box sx={{ mt: 7, mb: 12 }}>
          <Paper className={classes.paper} background="dark">
            {children}
          </Paper>
        </Box>
      </Container>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);
