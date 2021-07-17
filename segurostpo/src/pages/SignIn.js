import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Form, FormSpy } from 'react-final-form';
import {Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
//import { required } from './modules/form/validation';
//import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import { Button } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import Email from "@material-ui/icons/Email";
import CustomInput from "../components/CustomInput/CustomInput.js";
import LockIcon from '@material-ui/icons/Lock';

import { login } from '../controller/miApp.controller';
//import { useAuth0 } from "auth0-react";

const useStyles = makeStyles((theme) => ({
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
}));

function SignIn() {

  //const { loginWithRedirect } = useAuth0();
  const classes = useStyles();
  const [/* sent */, setSent] = React.useState(false);
  const [email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);

  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>{    
    setPassword(event.target.value);
  }

  const validarLogin= async function()
  {
      let datos = {
        email: email,
        password:password
      }
      let getLogin = await login(datos);
      if (getLogin.rdo===0 )
      {
        setUsuarioValido(true);
      }
      if (getLogin.rdo===1)
      {
        alert(getLogin.mensaje)
      }
      
  }

    //Valido campos y llamo endpoint
    const loginUser=()=>
    {
      if (email!=="" && password!=="")
      {
        validarLogin();
      }
      else
      {
        alert("Debe completar los campos.");
      }
      
      
    }  

  const handleSubmit = () => {
    setSent(true);
  };

  const redirect= ()=>{
    if (usuarioValido) {

      return <Redirect to='http://localhost:3000/' />
    }
    

  } 

  return (
    
    <div
        className={classes.pageHeader}
      >
    {redirect()}  
    
    <React.Fragment>
    <Helmet>
      <title>Iniciar Sesión | TPO Seguros</title>
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
            Iniciar sesión
          </Typography>
          <Typography variant="body2" align="center" >
            {'¿No eres cliente todavia? '}
            <Link
              href="http://localhost:3000/registro"
              align="center"
              underline="always"
            >
              Registrate desde aquí
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          //validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <CustomInput
                  labelText="Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleEmail(event),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />

              <CustomInput
                  labelText="Contraseña"
                  id="password"
                  value=""
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: (event) => handlePassword(event),
                    endAdornment: (
                      <InputAdornment position="end">
                         <LockIcon className={classes.inputIconsColor} />
                      </InputAdornment>
                    ),
                    autoComplete: "off"
                  }}
                />

              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback className={classes.feedback} error>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                className={classes.button}
                size="large"
                color="Primary"
                fullWidth
                onClick={loginUser}
              >
                {'Ingresar'}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" href="http://localhost:3000/recupclave">
            ¿Olvidaste tu contraseña?
          </Link>
        </Typography>
         
        <Typography align="right">
          <Button underline="always" variant="primary" href="/pers-login">
            Personal
          </Button>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
    </div>
  );
}

export default withRoot(SignIn);
