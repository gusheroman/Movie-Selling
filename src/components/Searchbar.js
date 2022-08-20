import React from 'react'
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
const Searchbar = () => {
    const classes = useStyles();
  return (
    <div className={classes.formControl}>
        <TextField
          classes={{ root: classes.input }}
          InputProps={{ disableUnderline: true }}
          variant="filled"
          placeholder="Movie Name"
        />
        <Button variant="contained" color="primary">
          Search
        </Button>
      </div>
  )
}
const useStyles = makeStyles({
    input: {
      "& .MuiFilledInput-input": {
        backgroundColor: "#F1F1F1",
        color:"black",
        borderRadius: "8px",
        padding: "16px",
        width: "300px",
      },
      marginRight: "24px",
    },
    formControl: {
      display: "flex",
      justifyContent:"center",
      margin:"56px "
    },
  });
export default Searchbar