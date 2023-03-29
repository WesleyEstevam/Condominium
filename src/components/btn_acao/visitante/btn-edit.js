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
import { Veiculo } from '../../Atributos/veiculo'
import { Telefone } from '../../Atributos/telefone'

export const EditVisitante = (props) => {
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
        <h1>Visitantes</h1>
        <Link href="/visitantes">
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
                  label="Empresa"
                  name="empresa"
                  onChange={handleChange}
                  required
                  value={values.nomeMae}
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
            <Link href='/visitantes'>
              <Button
                color="success"
                variant="contained"
                type="submit"
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