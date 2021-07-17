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
import CustomInput from "../components/CustomInput/CustomInput.js";
import { registration } from '../controller/miApp.controller';

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

function SignUp() {
  const classes = useStyles();
  const [/* sent */, setSent] = React.useState(false);
  const [name,setName]=React.useState('');
  const [email,setEmail]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[usuarioValido,setUsuarioValido]=React.useState(false);

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

  const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handlePassword=(event)=>{    
    setPassword(event.target.value);
  }
  const handleName=(event)=>{    
    setName(event.target.value);
  }

  const validarRegistro= async function()
  {
      let datos = {
        name: name,
        email: email,
        password:password
        
      }
      let getRegister = await registration(datos);
      if (getRegister.rdo===0 )
      {
        setUsuarioValido(true);
      }
      if (getRegister.rdo===1)
      {
        alert(getRegister.mensaje)
      }
      
  }

  const registerUser=()=>
  {
    if (email!=="" && password!=="" && name!=="")
    {
      validarRegistro();
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
      <title>ADMIN | AGREGAR CLIENTE</title>
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
            NUEVO CLIENTE
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
                  inputProps={{
                    type: "name",
                    onChange: (event) => handleName(event),
                    }}
                />
              <CustomInput
                  labelText="Email *"
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "email",
                    onChange: (event) => handleEmail(event),
                    }}
                  />
              <CustomInput
                  labelText="Contraseña *"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: (event) => handlePassword(event),
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
                color="primary"
                fullWidth
                onClick={registerUser}
              >
                {'CREAR NUEVO USUARIO'}
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