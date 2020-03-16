import React from "react";
import styles from "./style.module.css";

export default ({ children, color, type, onClick = () => {} }) => {
  const apppliedColor = color || "#00c09d";

  const backgroundColor = type === "outline" ? "white" : apppliedColor;
  const fontColor = type === "outline" ? apppliedColor : "white";
  const border = `2px solid ${apppliedColor}`;

  const style = {
    backgroundColor,
    color: fontColor,
    border
  };

  return (
    <button onClick={onClick} style={style} className={styles.button}>
      {children}
    </button>
  );
};
