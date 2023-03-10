import { useState } from 'react';
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from '@mui/material';

export const InfoVeiculos = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <>
      <div 
        style={{ 
          margin: 20,
          display: 'flex',
          justifyContent: 'space-between',

        }}
      >
        <h1>Dados do Veículo</h1>
        <Link href="/veiculos">
          <Button
            startIcon={(<ArrowBackIcon fontSize="small" />)}
            variant="contained"
          >
            Voltar
          </Button>
        </Link>
      </div>
      <form
        
        autoComplete="off"
        noValidate
        {...props}
      >
        <Card>
          <Divider />
          <CardContent>

            <CardHeader
              sx={{ 
                  textAlign: 'center'
                }}
              />
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Placa"
                  name="state"
                  onChange={handleChange}
                  required
                  value={values.state}
                  variant="outlined"
                  disabled= "true"
                >
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Cor"
                  name="state"
                  onChange={handleChange}
                  required
                  value={values.state}
                  variant="outlined"
                  disabled= "true"
                >
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Tipo"
                  name="state"
                  onChange={handleChange}
                  required
                  value={values.state}
                  variant="outlined"
                  disabled= "true"
                >
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Modelo"
                  name="state"
                  onChange={handleChange}
                  required
                  value={values.state}
                  variant="outlined"
                  disabled= "true"
                  
                >
                </TextField>
              </Grid>
              </Grid>  
          </CardContent>
          <Divider />
          <Box
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              p: 2
            }}
          >

          </Box>
        </Card>
      </form>
    </>  
  );
};