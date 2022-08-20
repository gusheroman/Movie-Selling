import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{ cursor: "pointer" }}>Movie</h1>

      <div className={classes.formControl}>
        <TextField
          classes={{ root: classes.input }}
          InputProps={{ disableUnderline: true }}
          variant="filled"
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    display: "flex",
    background: "#F1F1F1",
    width: "100vw",
    zIndex: 100,
    height: "72px",
    top: "0",
    position: "fixed",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    padding: "0px 74px 0px 56px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    "& .MuiFilledInput-input": {
      backgroundColor: "#100F0F",
      color:"white",
      borderRadius: "8px",
      padding: "16px",
      width: "300px",
    },
    marginRight: "24px",
  },
  formControl: {
    display: "flex",
    alignItems: "center",
  },
});
export default Navbar;
