import { Avatar, Card, CardContent, Grid, Typography } from '@mui/material';
import ErrorOutline from '@mui/icons-material/ErrorOutline';
import { baseURL } from '../api/api';
import { useState, useEffect } from 'react';
import axios from 'axios';
export const Ocorrencias = (props) => {

  const [totalOcorrencias, setTotalOcorrencias] = useState([])

  useEffect(() => {
    axios.get(baseURL + 'ocorrencia/totalOcorrencias')
    .then((response) => {
      setTotalOcorrencias(response.data)
    })
    .catch((error) => {
      console.log('ops! Erro na consulta ' + error)
    })
  }, []) 

  return (
    < Card {...props}>
      <CardContent>
        <Grid
          container
          spacing={3}
          sx={{ justifyContent: 'space-between' }}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="overline"
            >
              Ocorrências
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              { totalOcorrencias }
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'error.main',
                height: 56,
                width: 56
              }}
            >
              <ErrorOutline />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  )
};
