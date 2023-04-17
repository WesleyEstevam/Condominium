import { Veiculo } from '../../Atributos/veiculo'
import { Telefone } from '../../Atributos/telefone'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { baseURL } from '../../api/api';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import Link from 'next/link';
import { alerta } from '../alertaEdit';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';

export const EditVisitante = () => {
  const [visitante, setVisitante] = useState({
    nomePessoa: "", // Estado inicial do nomePessoa
    email: "", // Estado inicial do email
    documento: "", // Estado inicial do documento
    nomePai: "", // Estado inicial do nomePai
    nomeMae: "", // Estado inicial do nomeMae
    empresa: "", // Estado inicial do empresa
  });

  const router = useRouter();
  const data = router.query.data ? JSON.parse(router.query.data) : null; //ID DO VISITANTE

  // Carregar os dados do visitante quando o componente for montado
  useEffect(() => {
    if (data) {
      axios.get(baseURL + 'visitante/' + data)
        .then((response) => {
          setVisitante(response.data);
        })
        .catch((error) => {
          console.log('Ops, deu erro na obtenção dos dados do visitante: ' + error);
        });
    }
  }, [data]);

  // Atualizar as informações de cada input
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
    if (data) {
      axios.patch(baseURL + 'visitante/' + data, visitante)
        .then(() => {
          //setVisitante(response.data);
          router.push('/visitantes')
          alerta()
        })
        .catch((error) => {
          console.log('Ops, deu erro na atualização: ' + error);
        });
    }
  }

  const handleChange = (event) => {
    setVisitante({
      ...visitante,
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
                <label>Nome completo: </label>
                <TextField
                  fullWidth
                  name="nomePessoa"
                  onChange={handleChange}
                  required
                  value={visitante.nomePessoa}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>E-mail</label>
                <TextField
                  fullWidth
                  name="email"
                  onChange={handleChange}
                  required
                  value={visitante.email}
                  variant="outlined"
                />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Documento</label>
                <TextField
                  fullWidth
                  name="documento"
                  onChange={handleChange}
                  required
                  value={visitante.documento}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Nome do Pai</label>
                <TextField
                  fullWidth
                  name="nomePai"
                  onChange={handleChange}
                  required
                  value={visitante.nomePai}
                  variant="outlined"
                >
                </TextField>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <label>Nome do Mãe</label>
                <TextField
                  fullWidth
                  name="nomeMae"
                  onChange={handleChange}
                  required
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
                <label>Empresa</label>
                <TextField
                  fullWidth
                  name="empresa"
                  onChange={handleChange}
                  required
                  value={visitante.empresa}
                  variant="outlined"
                >
                </TextField>
              </Grid>
              <input
                name="tipo"
                type="hidden"
                value="visitante"
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
            <Button
              color="success"
              variant="contained"
              type="submit"
              onClick={handleSubmit}
            >
              Atualizar
            </Button>

          </Box>
        </Card>
      </form>
    </>
  );
};