import { useState } from 'react';
import { useRouter } from 'next/router';
import { Veiculo } from '../Atributos/veiculo';
import { Telefone } from '../Atributos/telefone';
import axios from 'axios';
import { baseURL } from '../api/api'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';

export const NovoVisitante = () => {
  const [values, setValues] = useState({
    nomePessoa: '',
    empresa: '',
    documento: '',
    nomePai: '',
    nomeMae: '',
    email: '',
    //telefone: '',
    nomeTipo: 'visitante'
  });

  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(baseURL + "visitante", values)
      .then(() => {
        router.push('/visitantes');
        alertaCadastro()
      })
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      method='POST'
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
                label="Nome completo"
                name="nomePessoa"
                onChange={handleChange}
                required
                value={values.nomePessoa}
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
                value={values.empresa}
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
                label="Nome do Pai"
                name="nomePai"
                onChange={handleChange}
                required
                variant="outlined"
              >
              </TextField>
            </Grid>
            <TextField
              name="tipo"
              type="hidden"
              value={values.nomeTipo}
              onChange={handleChange}
            >
            </TextField>
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
          <Button
            color="success"
            variant="contained"
            type="submit"
          >
            Cadastrar
          </Button>
        </Box>
      </Card>
    </form>
  );
};