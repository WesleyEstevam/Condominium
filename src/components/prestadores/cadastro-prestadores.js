import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';
import Link from 'next/link';
import axios from 'axios';
import { Veiculo } from '../Atributos/veiculo';
import { Telefone } from '../Atributos/telefone';

export const NovoPrestador = (props) => {
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
                label="Nome completo"
                name="nome"
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
                label="Documento"
                name="documento"
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
                label="Empresa"
                name="empresa"
                onChange={handleChange}
                required
                value={values.nomePai}
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
                label="Nome do Pai"
                name="nomePai"
                onChange={handleChange}
                required
                value={values.nomeMae}
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
                name="nomeMae"
                onChange={handleChange}
                required
                variant="outlined"
              >
              </TextField>
            </Grid>
            <input
              name="tipo"
              type="hidden"
              value="prestador"
            />
          </Grid>
          <CardHeader
            title="Dados do Veículo"
            sx={{
              textAlign: 'center'
            }}
          />
          <Grid
            item
            xs={12}
            mb={5}
          >
            <Veiculo />
          </Grid>
          <CardHeader
            title="Telefones"
            sx={{
              textAlign: 'center'
            }}
          />
          <Grid
            item
            xs={12}
          >
            <Telefone />
          </Grid>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            p: 2
          }}
        >
          <Link href='/prestadores'>
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