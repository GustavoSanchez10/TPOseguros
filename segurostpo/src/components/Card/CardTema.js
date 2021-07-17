import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import Card from "./Card.js";

import imagesStyles from "../css/imagesStyles.js";

import { cardTitle,cardSubtitle } from "../css/material-kit-pro-react.js";

const style = {
  ...imagesStyles,
  cardTitle,
  cardSubtitle
};

const useStyles = makeStyles(style);

export default function CardExampleImageOverlays(props) {
  const classes = useStyles();
  const colorTxt = props.color;
  const colorSub = props.colorSub;
  return (
    <Card style={{ color: colorTxt }}>
      <img
        className={classes.imgCard}
        src={props.backImg}
        alt={props.titulo}
        
      />
      <div className={classes.imgCardOverlay}>
        <h4 className={classes.cardTitle} style={{ color: colorTxt }}>
          {props.titulo}
        </h4>
        <p className={classes.cardSubtitle} style={{ color: colorSub }}>
          {props.subtitulo}
        </p>
      </div>
    </Card>
  );
}