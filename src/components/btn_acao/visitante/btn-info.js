import Link from 'next/link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';
import { Veiculo } from '../../Atributos/veiculo'
import { Telefone } from '../../Atributos/telefone'
import { useRouter } from 'next/router'
import { baseURL } from '../../api/api';

export const InfoVisitante = () => {
  const [visitante, setVisitante] = useState([])
  const router = useRouter()
  const data = router.query.data ? JSON.parse(router.query.data) : null

  useEffect(()=> {
      axios.get(baseURL + 'visitante/' + data)
      .then((response)=> {
        setVisitante(response.data)
      }) 
    .catch((error) => {
      console.log('Ops, deu erro na listagem do id' + error)
    })
  }, [])

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
                <label>Nome do visitante:</label>
                <TextField
                  fullWidth
                  name="nome"
                  onChange={handleChange}
                  disabled
                  value={visitante.nomePessoa}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>E-mail:</label>
                <TextField
                  fullWidth
                  name="email"
                  onChange={handleChange}
                  disabled
                  value={visitante.email}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Documento:</label>
                <TextField
                  fullWidth
                  name="documento"
                  onChange={handleChange}
                  disabled
                  value={visitante.documento}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Empresa:</label>
                <TextField
                  fullWidth
                  name="empresa"
                  onChange={handleChange}
                  disabled
                  value={visitante.empresa}
                  variant="outlined"
                >
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Nome da Mãe:</label>
                <TextField
                  fullWidth
                  name="nomeMae"
                  onChange={handleChange}
                  disabled
                  value={visitante.nomeMae}
                  variant="outlined"
                >
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Nome do Pai:</label>
                <TextField
                  fullWidth
                  name="nomePai"
                  onChange={handleChange}
                  disabled
                  value={visitante.nomePai}
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
        </Card>
      </form>
    </>
  );
};