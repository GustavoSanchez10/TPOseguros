import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "./Card.js";

import imagesStyles from "../css/imagesStyles.js";

import { cardTitle } from "../css/material-kit-pro-react.js";
import CardBody from "./CardBody";
import Button from "../CustomButtons/Button.js";

const style = {
  ...imagesStyles,
  cardTitle
};

const useStyles = makeStyles(style);

export default function CardExampleImageOverlays(props) {
  const classes = useStyles();
  const colorTxt = props.color;
  return (
    <Card style={{ color: colorTxt }}>
      <img
        className={classes.imgCard}
        src={props.backImg}
        alt={props.titulo}
        
      />
      <div className={classes.imgCardOverlay}>
        <h4 className={classes.cardTitle} style={{ color: colorTxt }}>
          
        </h4>
        <p>
          {props.subtitulo}
        </p>
      </div>
      <CardBody>
        <Button 
          color={props.colorBoton}
          fullWidth= {true}
        >
          {props.titulo}
        </Button>
      </CardBody>
    </Card>
  );
}