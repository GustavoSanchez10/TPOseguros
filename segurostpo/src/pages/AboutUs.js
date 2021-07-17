import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    /* root: {
        display: 'flex',
        backgroundColor: theme.palette.secondary,
        overflow: 'hidden',
      }, */
      /* container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(15),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }, */
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

function AboutUs() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppAppBar />
            <React.Fragment>
           
          <Typography variant="h3" gutterBottom align="center">
          <Typography variant="h2" gutterBottom align="center" fontWeight='bold' >
            {'SOMOS'}
          </Typography>
          <img
              src="/static/themes/onepirate/ProductHeroWonder.png"
              alt="Home"
              width="300"
            />
          </Typography> 
          <Typography color="inherit" align="center" variant="h4">
             Tu seguro correcto
          </Typography>
          <Typography color="inherit" align="center" variant="h4">
             en el momento justo
          </Typography>
           
        </React.Fragment>
         
        <React.Fragment>
            
          <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Mision</div>
                <img
                  src="/static/themes/onepirate/mision.svg"
                  alt="suitcase"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Seguridad a todas las personas
                </Typography>
                 
                <Typography variant="h5" align="center">
                La misión de una empresa es una herramienta estratégica que sintetiza el propósito de una empresa. Es el objetivo o la propuesta que sirve a la sociedad, así como la base del plan de negocios y de las estrategias operativas. Generalmente incluye una descripción general de la organización, su función y objetivos.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Institucional</div>
                <img
                  src="/static/themes/onepirate/empresa.svg"
                  alt="graph"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Siempre cerca tuyo
                </Typography>
                 
                <Typography variant="h5" align="center">
                TPO Seguros, fue fundado en 2021, tiene como finalidad satisfacer las necesidades y problematicas financieras de las personas a través de sus servicios de cobertura.
                </Typography>
                 
                <Typography variant="h5" align="center">
                Tambien tiene otro objetivo, el cual es aprobar la materia Aplicaciones Interactivas durante el primer cuatrimestre de 2021.
                </Typography>
                
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Vision</div>
                <img
                  src="/static/themes/onepirate/observacion.svg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h6" align="center">
                  Empresa N1 en seguros para personas
                </Typography>
                 
                <Typography variant="h5" align="center">
                La visión de una empresa es una meta de plazo amplio donde se establece la aspiración sobre los logros de una empresa y lo que se desea acerca de su estado futuro. Así, la visión define la ruta a seguir, tanto para los directivos como para los empleados.
                </Typography>
              </div>
            </Grid>
          </Grid>
           
        </div>
         
        </React.Fragment>
         
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
        <Typography align="center">
          <h5>
            TPO SEGUROS © 2021
          </h5>
        </Typography>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(AboutUs);
