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
  Alert,
  AlertTitle
} from '@mui/material';

export const NovoVisitante = (props) => {
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

  function Alertas(e) {
    e.preventDefault();
    
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      This is a success alert — <strong>check it out!</strong>
    </Alert>

    console.log("Deu certooo!")
  }

  return (
    <form
      onSubmit={Alertas}
      autoComplete="off"
      noValidate
      {...props}
    >
      {Alertas}
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
                label="Nome do Mãe"
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
            title="Dados do Veículo"
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
          <Button
            color="success"
            variant="contained"
          >
            Cadastrar
          </Button>
        </Box>
      </Card>
    </form>
  );
};