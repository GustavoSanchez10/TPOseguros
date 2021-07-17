import * as React from 'react';
import { Helmet } from 'react-helmet';
//import { Form, FormSpy } from 'react-final-form';
import {Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import AppForm from './modules/views/AppForm';
//import { required } from './modules/form/validation';
//import RFTextField from './modules/form/RFTextField';
//import FormButton from './modules/form/FormButton';
//import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import { Button } from '@material-ui/core';
//import CustomInput from "../components/CustomInput/CustomInput.js";

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

function Eprofile() {

  const classes = useStyles();
/*   const [, setSent] = React.useState(false);
  const [email,setEmail]=React.useState(''); */
/*   const[name,setName]=React.useState(''); */
  const[usuarioValido,/* setUsuarioValido */]=React.useState(false);

/*   const handleEmail=(event)=>{
    setEmail(event.target.value);
  }
  const handleName=(event)=>{    
    setName(event.target.value);
  } */

/*   const validarLogin= async function()
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
      
  }
 */
    //Valido campos y llamo endpoint
/*     const loginUser=()=>
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

/*   const handleSubmit = () => {
    setSent(true);
  }; */

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
      <title>Mis datos | TPO Seguros</title>
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
            Se actualizaron tus datos correctamente
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
    </div>
  );
}

export default withRoot(Eprofile);
