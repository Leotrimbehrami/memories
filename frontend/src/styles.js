// // styles.js
// import { styled } from '@mui/material/styles';
// import { AppBar, Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// export const StyledAppBar = styled(AppBar)({
//   borderRadius: 15,
//   margin: '30px 0',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'center',
//   alignItems: 'center',
// });

// export const StyledTypography = styled(Typography)({
//   color: 'rgba(0,183,255, 1)',
// });

// export const StyledImage = styled('img')({
//   marginLeft: '15px',
// });


// export const useStyles = makeStyles((theme) => ({  // Füge diese Zeile hinzu
//   mainContainer: {
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: "column-reverse",
//     },
//   },
// }));

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }

  }
}));
