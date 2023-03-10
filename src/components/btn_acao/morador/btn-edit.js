import { useState } from 'react';
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
import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const EditMorador = (props) => {
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
        <h1>Morador</h1>
        <Link href="/moradores">
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
                  label="Primeiro nome"
                  name="firstName"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Sobrenome"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Contato"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Documento"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Nome do Pai"
                  name="state"
                  onChange={handleChange}
                  required
                  value={values.state}
                  variant="outlined"
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
                  label="Nome do M??e"
                  name="state"
                  onChange={handleChange}
                  required
                  value={values.state}
                  variant="outlined"
                >
                </TextField>
              </Grid>
            </Grid>
            <CardHeader
              title="Dados do Ve??culo"
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
          <Link href="/moradores">
            <Button
              variant="contained"
              color='success'
            >
              Atualizar
            </Button>
          </Link>

          </Box>
        </Card>
      </form>
    </>  
  );
};