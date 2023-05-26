import { useState, useEffect } from 'react';
import { Veiculo } from '../Atributos/veiculo';
import { Telefone } from '../Atributos/telefone';
import { Imoveis } from '../Atributos/imoveis';
import { baseURL } from '../api/api';
import { useRouter } from 'next/router';
import { alertaCadastro } from '../btn_acao/alertas';
import axios from 'axios'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField
} from '@mui/material';

export const NovoMorador = () => {
  const [values, setValues] = useState({
    nomePessoa: '',
    empresa: '',
    documento: '',
    nomePai: '',
    nomeMae: '',
    email: '',
    //telefone: '',
    quadra: '',
    lote: '',
    bloco: '',
    apartamento: '',
    nomeTipo: 'morador'
  });

  
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(baseURL + "morador", values)
      .then(() => {
        router.push('/moradores');
        alertaCadastro()
      })
      .catch((error) => {
        console.error("ops! ocorreu um erro " + error);
      });
  };


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
      onSubmit={handleSubmit}
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
                label="Nome do Pai"
                name="nomePai"
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
                label="Quadra"
                name="quadra"
                onChange={handleChange}
                value={values.quadra}
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
                label="Bloco"
                name="bloco"
                onChange={handleChange}
                value={values.bloco}
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
                label="Lote"
                name="lote"
                onChange={handleChange}
                value={values.lote}
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
                label="Apartamento"
                name="apartamento"
                onChange={handleChange}
                value={values.apartamento}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <input
              name="tipo"
              type="hidden"
              value="morador"
            />
          </Grid>
          <CardHeader
            title="Imóveis"
            sx={{
              textAlign: 'center'
            }}
          />
          <Grid
            item
            xs={12}
            mb={5}
          >
            <Imoveis />
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