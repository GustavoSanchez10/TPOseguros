import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Form, FormSpy } from 'react-final-form';
import {Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
//import { required } from './modules/form/validation';
//import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
//import { Button } from '@material-ui/core';
import CustomInput from "../components/CustomInput/CustomInput.js";

import { admlogin } from '../controller/miApp.controller';

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

  const classes = useStyles();
  const [/* sent */, setSent] = React.useState(false);
  const [empid,setEmpid]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);

/*   const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  }; */

  const handleEmpid=(event)=>{
    setEmpid(event.target.value);
  }
  const handlePassword=(event)=>{    
    setPassword(event.target.value);
  }

  const validarLogin= async function()
  {
      let datos = {
        empid: empid,
        password:password
      }
      let getLogin = await admlogin(datos);
      if (getLogin.rde===0 )
      {
        setUsuarioValido(true);
      }
      if (getLogin.rde===1)
      {
        alert(getLogin.mensaje)
      }
      
  }

    //Valido campos y llamo endpoint
    const loginUser=()=>
    {
      if (empid!=="" && password!=="")
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

      return <Redirect to='http://localhost:3000/admin' />
    }
    

  } 

  return (
    
    <div
        className={classes.pageHeader}
      >
    {redirect()}  
    
    <React.Fragment>
    <Helmet>
      <title>Admin | TPO Seguros</title>
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
          Administración
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
                  labelText="ID EMPLEADO ..."
                  id="empid"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "empid",
                    onChange: (event) => handleEmpid(event),
                  }}
                />

              <CustomInput
                  labelText="CONTRASEÑA ..."
                  id="password"
                  value=""
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: (event) => handlePassword(event),
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
          <h5>
            Si olvidaste tu contraseña
          </h5>
          <h5>
            Contacta al soporte tecnico, o tu supervisor.
          </h5>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
    </div>
  );
}

export default withRoot(SignIn);
