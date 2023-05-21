import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import moment from 'moment'
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export default function ComplexGrid({ data }) {
  console.log(data)
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
               Upload History  {data[0]}{"\n"}
                {/* {console.log('data------',data)} */}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data[1]}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data[2]}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data[3]}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {data[4]}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data[5] + ' years'}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {data[6]}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Apply
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {moment(data[3]).format('ll')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
