import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';
import TextField from '../components/TextField';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="http://localhost:3000/">
        TPO SEGUROS 
      </Link>{' '}
      {new Date().getFullYear()}
      {' - Todos los derechos reservados. '}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: 'flex',
    color:"#E9EFF3"
  },
  iconsWrapper: {
    height: 180,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  list: {
    margin: 2,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.7),
    paddingBottom: theme.spacing(0.7),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'es-MX',
    name: 'Español',
  },
  {
    code: 'en_US',
    name: 'English',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={9}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                <a href="https://www.facebook.com/" className={classes.icon}>
                  <img
                    src="/static/themes/onepirate/appFooterFacebook.png"
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com/" className={classes.icon}>
                  <img
                    src="/static/themes/onepirate/appFooterTwitter.png"
                    alt="Twitter"
                  />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" color="inherit" align='center' gutterBottom>
              Privacidad y Legales
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link color="inherit" href="http://localhost:3000/terminos">Terminos y condiciones</Link>
              </li>
              <li className={classes.listItem}>
                <Link color="inherit" href="http://localhost:3000/privacidad">Politicas de privacidad</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" color="inherit" gutterBottom>
              Idioma
            </Typography>
            <TextField
              size="medium"
              select
              SelectProps={{
                native: true,
              }}
              className={classes.language}
              variant="standard"
            >
              {LANGUAGES.map((language) => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant="caption">
              {'Iconos y material hechos por '}
              <Link color="inherit" href="https://www.freepik.com" rel="sponsored" title="Freepik">
                Freepik
              </Link>
              {' desde '}
              <Link color="inherit" href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                color="inherit"
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
