import * as React from 'react';
import { Helmet } from 'react-helmet';
//import {Redirect} from "react-router-dom";
//import { makeStyles } from '@material-ui/core/styles';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
//import { required } from './modules/form/validation';
//import RFTextField from './modules/form/RFTextField';
import withRoot from './modules/withRoot';
import { Button } from '@material-ui/core';

//import { login } from '../controller/miApp.controller';

/* const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(6),
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
})); */

function Econtacto() {

  //const classes = useStyles();

  return (
    
    <React.Fragment>
    <Helmet>
      <title>Contacto  exitoso | TPO Seguros</title>
    </Helmet>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography component="h1" variant="h4" align="center">
            <img
              src="/static/themes/onepirate/TPO_Logo.png"
              alt="Home"
              align='center'
            />
          </Typography>
          <Typography variant="h3" gutterBottom align="center">
            Recibimos tus datos 
          </Typography>

        <Typography align="center">
        </Typography>
        <Typography component="h1" variant="h4" align="center">
            <img
              src="/static/themes/onepirate/papelo.png"
              alt="Home"
              align='center'
              width='150'
            />
            
          </Typography>
          <Typography variant="h3" gutterBottom align="center">
            nos pondremos en contacto lo antes posible
          </Typography>
        <Typography align="right">
         
        <Button
          size="large"
          background="Primary"
          color='primary'
          fullWidth
          variant="contained"
          component="a"
          href="http://localhost:3000/"
        >
          Regresar al inicio
        </Button>
        </Typography>
        </React.Fragment>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Econtacto);