import React, {useState} from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import useStyles from "./styles";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFiles: ''
  })
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={}
        />
      </form>
    </Paper>
  );
};

export default Form;
