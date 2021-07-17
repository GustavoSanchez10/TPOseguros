import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppAppBar from './modules/views/AppAppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import AppForm from './modules/views/AppForm';
import Review from './Review';
import AppFooter from '../pages/modules/views/AppFooter';
import { Helmet } from 'react-helmet';
import withRoot from './modules/withRoot';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'© '}
      <Link color="inherit" href="http://localhost:3000/">
        TPO SEGUROS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  feedback: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

const steps = ['Datos Personales', 'Detalles de pago', 'Detalles de tu Seguro'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(2);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <React.Fragment>
    <Helmet>
      <title>Checkout | TPO Seguros</title>
    </Helmet>
    <AppAppBar />
    <AppForm>
      <React.Fragment />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            <img
              src="/static/themes/onepirate/TPO_Logo.png"
              alt="Home"
              align='center'
            />
          </Typography>
            
          <Typography component="h1" variant="h4" align="center">
            Comenza tu experiencia
          </Typography>
          <Typography component="h1" variant="h4" align="center">
            HOY
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom align='center'>
                  ¡Muchas gracias por confiar en nosotros!
                </Typography>
                 
                <Typography variant="subtitle1" align='center'>
                  Your order number is #666013. 
                </Typography>
                <Typography variant="subtitle1">
                Hemos enviado la confirmación de su pedido por correo electrónico y le enviaremos una actualización cuando se haya habilitado su pedido.
                </Typography>

                <Button
                  size="large"
                  color="Primary"
                  background="Primary"
                  fullWidth
                  variant="contained"
                  className={classes.button}
                  component="a"
                  href="http://localhost:3000/"
                >
                  Regresar al inicio
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      fullWidth
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Contratar' : 'Continuar'}
                    </Button>
                  )}
                </div>                  
                <Button href='/checkout2' variant="contained" background="Primary" fullWidth> 
                  Volver Atras
                </Button>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Checkout);