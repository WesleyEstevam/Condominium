import { useState } from 'react';
import { useRouter } from 'next/router';
import { baseURL } from './../api/api'
import axios from 'axios'
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField
} from '@mui/material';
export function NovoTelefone() {
  const [values, setValues] = useState({
    DDD: '',
    numeroTelefone: ''
  });

  const router = useRouter();

  async function cadastrarTelefone() {
    axios.post(baseURL + "telefone", values)
      .then(() => {
        router.back();
      })
      .catch((error) => {
        console.log("Ops! Erro ao cadastrar um telefone " + error);
      })


  }

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      onSubmit={cadastrarTelefone}
      autoComplete="off"
      noValidate
    >
      <Card>
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
                type="number"
                label="DDD"
                name="DDD"
                onChange={handleChange}
                required
                value={values.DDD}
                variant="outlined"
                helperText="EX: (85)"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                type="number"
                label="Número"
                name="numeroTelefone"
                onChange={handleChange}
                required
                value={values.numeroTelefone}
                variant="outlined"
                helperText="EX: 0 0000-0000"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Button
            onClick={cadastrarTelefone}
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