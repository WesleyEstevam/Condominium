import { useState, useEffect } from 'react';
import { Veiculo } from '../Atributos/veiculo';
import { Telefone } from '../Atributos/telefone';
import axios from 'axios'
import Link from 'next/link'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@mui/material';
import { Imoveis } from '../Atributos/imoveis';

export const NovoImovel = (props) => {
  const [values, setValues] = useState({
    nome: '',
    email: '',
    telefone: '',
    documento: '',
    nomePai: '',
    nomeMae: ''
  });

  const data = {
    nome: setValues.nome,
    email: setValues.email,
    documento: setValues.documento,
    nomePai: setValues.nomePai,
    nomeMae: setValues.nomeMae
  }

  useEffect(() => {
    axios.post("http://localhost:3000/visitante", data)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
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
                label="Quadra"
                name="quadra"
                onChange={handleChange}
                required
                value={values.nome}
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
                label="Lote"
                name="lote"
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
                label="Bloco"
                name="bloco"
                onChange={handleChange}
                required
                value={values.documento}
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
                label="Apartamento"
                name="apartamento"
                onChange={handleChange}
                required
                value={values.nomePai}
                variant="outlined"
              >
              </TextField>
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
          <Link href='/imoveis'>
            <Button
              color="success"
              variant="contained"
              type="submit"
            >
              Cadastrar
            </Button>
          </Link>
        </Box>
      </Card>
    </form>
  );
};