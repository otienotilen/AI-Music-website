import React from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  Divider,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  avatatContainer: {
    width: "50%"
  },
  divider: {
    width: "100%",
    margin: 10
  },
  miniContainer: {
    margin: 10,
    "& div": {
      margin: "2px"
    },
    "& .MuiAvatar-root": {
      // width: 50,
      // height: 50,
      marginRight: 20,
      marginLeft: 10,
      background: pink[500],
      color: "#fff"
    }
  }
});

const ContributorsPage = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Grid container justify="center">
        <Grid
          component={Link}
          href="https://github.com/otienotilen"
          target="blank"
          container
          direction="column"
          alignItems="center"
          color="inherit"
          className={classes.avatatContainer}
        >
         
          <Typography variant="h5">Tilen Otieno</Typography>
          <Typography>Creator of AI Music</Typography>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          
          component={Link}
          href="https://github.com/otienotilen"
          target="blank"
          color="inherit"
        >
         
         
        </Grid>
      </Grid>
    </>
  );
};

export default ContributorsPage;
