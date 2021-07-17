import * as React from 'react';
import { Helmet } from 'react-helmet';
import { Form, FormSpy } from 'react-final-form';
import {Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
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
import CustomInput from "../components/CustomInput/CustomInput.js";

//import { login } from '../controller/miApp.controller';

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

function Profile() {

  const classes = useStyles();
  const [/* sent */, setSent] = React.useState(false);
  const [/* email */,setEmail]=React.useState('');
  const[/* name */,setName]=React.useState('');
  const[usuarioValido,/* setUsuarioValido */]=React.useState(false);

  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handleName=(event)=>{    
    setName(event.target.value);
  }

  /* const validarLogin= async function()
  {
      let datos = {
        email: email,
        name:name
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
      
  } */

    //Valido campos y llamo endpoint
    /* const loginUser=()=>
    {
      if (email!=="" && name!=="")
      {
        validarLogin();
      }
      else
      {
        alert("Debe completar los campos.");
      }
      
      
    }   */

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
      <title>ADMIN | MODIFICAR CONTRATO</title>
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
            MODIFICAR DATOS DE CONTRATO
          </Typography>
          <Typography variant="subtitle1" gutterBottom className={classes.button} align="center">
           
          </Typography>
           
        </React.Fragment>
        <CustomInput
                  labelText="NUMERO ORDEN ..."
                  id="order"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "order",
                    autoComplete: "off"
                  }}
                />
        <Button
          size="large"
          background="Primary"
          fullWidth
          variant="contained"
          component="a"
          color='primary'
          href="http://localhost:3000/admin"
        >
          BUSCAR Contrato
        </Button>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          //validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <form onSubmit={handleSubmit2} className={classes.form} noValidate>
              <CustomInput
                  labelText="TITULAR ..."
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    autoComplete: "off"
                  }}
                />

              <CustomInput
                  labelText="DIRECCION ..."
                  id="address"
                  value=""
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleEmail(event),
                    autoComplete: "off"
                  }}
                />
                <CustomInput
                  labelText="TIPO DE SEGURO ..."
                  id="address"
                  value=""
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleName(event),
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
                //disabled={submitting || sent}
                size="large"
                color="Primary"
                fullWidth
                href='http://localhost:3000/perfil/exito'
              >
                {'Actualizar datos'}
              </FormButton>
            </form>
          )}
        </Form>
        <Typography align="center">
        </Typography>
         
        <Typography align="right">
        <Button
          size="large"
          background="Primary"
          fullWidth
          variant="contained"
          component="a"
          href="http://localhost:3000/admin"
        >
          VOLVER ATRAS
        </Button>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
    </div>
  );
}

export default withRoot(Profile);