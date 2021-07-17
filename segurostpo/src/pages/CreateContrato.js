import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
//import Grid from '@material-ui/core/Grid';
//import Link from '@material-ui/core/Link';
import { Form, FormSpy } from 'react-final-form';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
//import { email, required } from './modules/form/validation';
//import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import {Redirect} from "react-router-dom";
import { TextField } from '@material-ui/core';
import CustomInput from "../components/CustomInput/CustomInput.js";
//import { registration } from '../controller/miApp.controller';
import { createContrato } from '../controller/miApp.controller.js';

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

const SEGUROS = [
  {
    code: 'Accidentes',
    name: 'Accidentes',
  },
  {
    code: 'Automotor',
    name: 'Automotor',
  },
  {
    code: 'Cartera',
    name: 'Cartera',
  },
  {
    code: 'Embarcaciones',
    name: 'Embarcaciones',
  },
  {
    code: 'Hogar',
    name: 'Hogar',
  },
  {
    code: 'Mascotas',
    name: 'Mascotas',
  },
  {
    code: 'Moto',
    name: 'Moto',
  },
  {
    code: 'Ordenadores',
    name: 'Ordenadores',
  },
  {
    code: 'vida',
    name: 'Vida',
  },
];

function SignUp() {
  const classes = useStyles();
  const [/* sent */, setSent] = React.useState(false);
  const[name,setName]=React.useState('');
  const[address,setAddress]=React.useState('');
  const[stype,setStype]=React.useState('');
  const [order]=React.useState('666013');
  const[contratoValido,setContratoValido]=React.useState(false);

  /* const validate = (values) => {
    const errors = required(['firstName', 'lastName', 'email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  }; */

  const handleName=(event)=>{
    setName(event.target.value);
  }
  const handleAddress=(event)=>{
    setAddress(event.target.value);
  }
  const handleStype=(event)=>{
    setStype(event.target.value);
  }

  const validarContrato= async function()
  {
      let datos = {
        name: name,
        address: address,
        stype: stype,
        order: order
      }
      let getContrato = await createContrato(datos);
      if (getContrato.rdo===0 )
      {
        setContratoValido(true);
      }
      if (getContrato.rdo===1)
      {
        alert(getContrato.mensaje)
      }
      
  }

  const camposSeguro=()=>
  {
    if (name!=="" && address!=="" && stype!=="")
    {
      validarContrato();
    }
    else
    {
      alert("Complete todos los campos.");
    }
    
    
  }  

  const handleSubmit = () => {
    setSent(true);
  };
  const redirect= ()=>{
    if (contratoValido) {

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
      <title>ADMIN | AGREGAR CONTRATO</title>
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
            NUEVO CONTRATO
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
                    labelText="Nombre completo *"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    className={classes.button}
                    inputProps={{
                      type: "name",
                      onChange: (event) => handleName(event),
                    }}
            />
          <CustomInput
                    labelText="Direccion (Calle, Ciudad, Provincia) *"
                    id="address"
                    formControlProps={{
                      fullWidth: true
                    }}
                    className={classes.button}
                    inputProps={{
                      type: "address",
                      onChange: (event) => handleAddress(event),
                    }}
            />
          <TextField
            label="SEGURO A CONTRATAR *"
            id="stype"
            variant="outlined"
            select
            SelectProps={{
              native: true,
              type: "stype",
              onChange: (event) => handleStype(event),
            }}
            className={classes.button}
            fullWidth
          >
            {SEGUROS.map((seguro) => (
              <option value={seguro.code} key={seguro.code}>
                {seguro.name}
              </option>
            ))}
          </TextField>

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
                  //size="medium"
                  align='right'
                  color="Primary"
                  background="Primary"
                  variant="contained"
                  fullWidth
                  className={classes.button}
                  //component="a"
                  onClick={camposSeguro}
                >
                  {'CREAR NUEVO CONTRATO'}
                </FormButton>
                <FormButton
                className={classes.button}
                color="dark"
                fullWidth
                href="/admin"
              >
                {'Volver Atras'}
              </FormButton>
      </form>
          )}
        </Form>

      </AppForm>
      <AppFooter />
    </React.Fragment>
    </div>
  );
}

export default withRoot(SignUp);