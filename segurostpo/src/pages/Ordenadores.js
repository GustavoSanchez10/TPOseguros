import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from './modules/components/Typography';
import AppFooter from './modules/views/AppFooter';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from './modules/withRoot';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
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

function Moto() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
      <title>Ordenador | TPO Seguros</title>
    </Helmet>
      <AppAppBar />
            <React.Fragment>
             
                <Typography variant="h3" gutterBottom align="center">
                <img
                    src="/static/themes/onepirate/ProductHeroWonder.png"
                    alt="Home"
                    width="250"
                    />
                </Typography> 
                <Typography color="inherit" align="center" variant="h2">
                    ordenador
                </Typography>
              
            </React.Fragment>
             
            <React.Fragment>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                             <div className={classes.item}>
                                <img
                                src="/static/themes/onepirate/ordenador1.png"
                                alt="Home"
                                width="350"
                                align='left'
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <div className={classes.number}>Proteje tus bienes</div>
                                    <img
                                    src="/static/themes/onepirate/ordenador.svg"
                                    alt="graph"
                                    className={classes.image}
                                />
                                <Typography variant="h6" align="center">
                                    a todo momento
                                </Typography>
                                 
                                <Typography variant="h5" align="center">
                                    *datos del seguro*
                                </Typography>
                                 
                                <Typography variant="h5" align="center">
                                    Completar despues
                                </Typography>
                                 
                                <Typography variant="h5" align="center">
                                    :)
                                </Typography>
                                 
                                <Button
                                size="large"
                                background="Primary"
                                fullWidth
                                variant="contained"
                                className={classes.button}
                                component="a"
                                href="/checkout"
                                >
                                Contratar ahora
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className={classes.item}>
                                <img
                                src="/static/themes/onepirate/ordenador0.jpg"
                                alt="Home"
                                width="405"
                                />
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
                href="/Home"
            >
          
            </Button>
        <React.Fragment>
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
        </React.Fragment>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Moto);