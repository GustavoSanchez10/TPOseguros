import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomInput from "../components/CustomInput/CustomInput.js";
//import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Redirect} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
//import FormButton from './modules/form/FormButton';
import { Form, FormSpy } from 'react-final-form';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import Link from '@material-ui/core/Link';
//import { Link } from '@material-ui/core';
//import Grid from '@material-ui/core/Grid';

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

function PaymentForm() {

  const classes = useStyles();
  const [/* sent */, setSent] = React.useState(false); 
  const[tarjeta,setTarjeta]=React.useState('');
  const[dni,setDni]=React.useState('');
  const[venc,setVenc]=React.useState('');
  const[cvv,setCvv]=React.useState(false);
  const[DatosValidos,setDatosValidos]=React.useState(false);

  const handleTarjeta=(event)=>{
    setTarjeta(event.target.value);
  }
  const handleVenc=(event)=>{
    setVenc(event.target.value);
  }
  const handleDni=(event)=>{
    setDni(event.target.value);
  }
  const handleCvv=(event)=>{
    setCvv(event.target.value);
  }


  const camposSeguro=()=>
  {
    if (tarjeta!=="" && dni!=="" && venc!=="" && cvv!=="")
    {
      setDatosValidos(true);
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
    if (DatosValidos) {
      return <Redirect to='http://localhost:3000/checkout3' />
    }
  }

  return (
    <div
      className={classes.pageHeader}
    >
      {redirect()}  
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de tarjeta
      </Typography>
      <Form
        onSubmit={handleSubmit}
        subscription={{ submitting: true }}
        //validate={validate}
      >
        {({ handleSubmit: handleSubmit2, submitting }) => (
        <form onSubmit={handleSubmit2} className={classes.form} noValidate>
          <CustomInput
                    labelText="Número de Tarjeta *"
                    id="tarjeta"
                    formControlProps={{
                      fullWidth: true
                    }}
                    className={classes.button}
                    inputProps={{
                      type: "tarjeta",
                      onChange: (event) => handleTarjeta(event),
                    }}
            />
          <CustomInput
                    labelText="D.N.I. *"
                    id="dni"
                    formControlProps={{
                      fullWidth: true
                    }}
                    className={classes.button}
                    inputProps={{
                      type: "dni",
                      onChange: (event) => handleDni(event),
                    }}
            />
            <CustomInput
                    labelText="Vencimiento (MM/AA) *"
                    id="venc"
                    formControlProps={{
                    }}
                    className={classes.button}
                    inputProps={{
                      type: "venc",
                      onChange: (event) => handleVenc(event),
                    }}
            />
            <Link> {'                   '} </Link>
            <CustomInput
                    labelText="CVV *"
                    id="cvv"
                    formControlProps={{
                    }}
                    className={classes.button}
                    inputProps={{
                      type: "cvv",
                      onChange: (event) => handleCvv(event),
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
                <Button
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
                  {'Continuar'}
                </Button>
                <Button
                  //size="medium"
                  align='right'
                  background="Primary"
                  variant="contained"
                  fullWidth
                  //component="a"
                  href='/checkout'
                >
                  {'Volver Atras'}
                </Button>
      </form>
          )}
        </Form>
    </React.Fragment>
    </div>
  );
}

export default withRoot(PaymentForm);