import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import AppForm from './modules/views/AppForm';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import Snackbar from '../pages/modules/components/Snackbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
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
        marginBottom: theme.spacing(6),
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
}));

function Automotor() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
        <Helmet>
      <title>Contacto | TPO Seguros</title>
    </Helmet>
      <AppAppBar />
      <AppForm>
      <CssBaseline />
      <div className={classes.paper}>
      <Typography variant="h3" gutterBottom align="center">
          <img
              src="/static/themes/onepirate/TPO_Logo.png"
              alt="Home"
            />
            <h4>
                TPO SEGUROS
            </h4>
          </Typography> 
        <Typography variant="h6" align="center">
          Dejanos tus datos y un agente se comunicara lo antes posible
        </Typography>
         
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nombre/s"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Apellido/s"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="telefono"
                label="Numero de telefono"
                type="telefono"
                id="telefono"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            href='http://localhost:3000/contacto/exito'
          >
            Contactanos
          </Button>
           
          <Button
            type="submit"
            fullWidth
            variant="contained"
            href='/EContacto'
          >
            Regresar al inicio
          </Button>
          <Snackbar
              message="¡Tenemos tus datos!, Un agente se pondra en contacto contigo lo antes posible."
            /> 
          <Grid container justify="center">
            <Grid item>
              <h4 align='center'>
                  Recorda que podés suscribirte para no perderte ninguna novedad
              </h4>
                <h4 align='center'>
                ¡no te pierdas ninguna noticia!
              </h4>
            </Grid>
          </Grid>
        </form>
      </div>
      <Typography align="center">
                <h5>
                    TPO SEGUROS © 2021
                </h5>
            </Typography>
            </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Automotor);