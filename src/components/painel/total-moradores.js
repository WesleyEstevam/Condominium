import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { baseURL } from '../api/api';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const TotalMoradores = (props) => {
  const [totalMoradores, setTotalMorador] = useState([])

  useEffect(() => {
    axios.get(baseURL + 'morador/totalMoradores')
    .then((response) => {
      setTotalMorador(response.data)
    })
    .catch((error) => {
      console.log('ops! Erro na consulta ' + error)
    })
  }, []) 

  return (
    <Card {...props}>
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
              Moradores
            </Typography>
            <Typography
              color="textPrimary"
              variant="h4"
            >
              {totalMoradores}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: 'success.main',
                height: 56,
                width: 56
              }}
            >
              <PeopleIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            pt: 2
          }}
        >
          <ArrowUpwardIcon color="success" />
          <Typography
            variant="body2"
            sx={{
              mr: 1
            }}
          >
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Total de moradores
          </Typography>
        </Box>
      </CardContent>
    </Card>
  )
};
