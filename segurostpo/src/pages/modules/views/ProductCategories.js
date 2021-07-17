import * as React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.5,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 8,
    right: 8,
    top: 8,
    bottom: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 8,
    right: 8,
    top: 8,
    bottom: 8,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    
    {
      url:
        'https://fotografias.lasexta.com/clipping/cmsimages02/2020/09/22/E9736ECC-8C34-4EEC-8559-D0AA4B75885B/58.jpg',
      title: 'Automotores',
      width: '40%',
      href: 'http://localhost:3000/automotor',
    },
    {
      url:
        'https://i.ebayimg.com/images/g/IK8AAOSwGVRdJhD5/s-l500.jpg',
      title: 'Cartera',
      width: '20%',
      href: 'http://localhost:3000/cartera',
    },
    {
      url:
        'https://s1.eestatic.com/2020/03/02/imprescindibles/branded_content-marcas_destacadas-amazon_471713872_147102697_1706x960.jpg',
      title: 'Moto',
      width: '40%',
      href: 'http://localhost:3000/moto',
    },
    {
      url:
        'https://image.freepik.com/foto-gratis/enfermera-aplicando-vendaje-al-codo-lesionado-paciente_35666-507.jpg',
      title: 'Accidentes personales',
      width: '38%',
      href: 'http://localhost:3000/accidentes',
    },
    {
      url:
        'https://www.microsoft.com/es-es/microsoft-365/blog/wp-content/uploads/sites/26/2019/07/Improving-the-Office-365-app-experience-in-virtual-environments-card.jpg',
      title: 'Ordenadores',
      width: '38%',
      href: 'http://localhost:3000/ordenadores',
    },
    {
      url:
        'https://www.saltillo360.com/wp-content/uploads/2019/11/vida.jpg',
      title: 'VIDA',
      width: '24%',
      href: 'http://localhost:3000/vida',
    },
    {
      url:
        'https://i.pinimg.com/originals/7b/ae/50/7bae50d98359d8280000bc32ad255928.jpg',
      title: 'Hogar',
      width: '40%',
      href: 'http://localhost:3000/hogar',
    },
    {
      url:
        'https://www.wearetesters.com/wp-content/uploads/2018/11/MASCOTAS.jpg',
      title: 'Mascotas',
      width: '20%',
      href: 'http://localhost:3000/mascotas',
    },
    {
      url:
        'https://live.staticflickr.com/1853/43730234725_162a2c2b9a_b.jpg',
      title: 'Embarcaciones',
      width: '40%',
      href: 'http://localhost:3000/embarcaciones',
    },
  ];

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" align="center" component="h2">
        Conoce nuestros seguros
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
            href={image.href}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
