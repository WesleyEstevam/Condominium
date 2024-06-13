import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { baseURL } from "../../api/api";
import { alerta } from "../alertas";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import Link from "next/link";

export const EditCoroinha = () => {
  const [coroinha, setCoroinha] = useState({
    nome_coroinha: "",
    sexo_coroinha: "",
    altura_coroinha: "",
    tipo_coroinha: "",
  });

  const router = useRouter();
  const data = router.query.data ? JSON.parse(router.query.data) : null; //ID DO coroinha

  // Carregar os dados do coroinha quando o componente for montado
  useEffect(() => {
    if (data) {
      axios
        .get(baseURL + "coroinhas/" + data)
        .then((response) => {
          setCoroinha(response.data);
        })
        .catch((error) => {
          console.log(
            "Ops, deu erro na obtenção dos dados do coroinha: " + error
          );
        });
    }
  }, [data]);

  // Atualizar as informações de cada input
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário
    if (data) {
      axios
        .patch(baseURL + "coroinhas/" + data, coroinha)
        .then(() => {
          router.push("/coroinhas");
          alerta();
        })
        .catch((error) => {
          console.log("Ops, deu erro na atualização: " + error);
        });
    }
  };

  const handleChange = (event) => {
    setCoroinha({
      ...coroinha,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div
        style={{
          margin: 20,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>coroinhas</h1>
        <Link href="/coroinhas">
          <Button
            startIcon={<ArrowBackIcon fontSize="small" />}
            variant="contained"
          >
            Voltar
          </Button>
        </Link>
      </div>
      <form autoComplete="off">
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <label>Nome do coroinha:</label>
                <TextField
                  fullWidth
                  name="nome_coroinha"
                  onChange={handleChange}
                  value={coroinha.nome_coroinha}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Altura:</label>
                <TextField
                  fullWidth
                  name="altura_coroinha"
                  onChange={handleChange}
                  value={coroinha.altura_coroinha}
                  variant="outlined"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <label>Sexo:</label>
                <TextField
                  fullWidth
                  name="sexo_coroinha"
                  onChange={handleChange}
                  value={coroinha.sexo_coroinha}
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <label>Tipo:</label>
                <TextField
                  fullWidth
                  name="tipo_coroinha"
                  onChange={handleChange}
                  value={coroinha.tipo_coroinha}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" mt={3}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={handleSubmit}
                  >
                    Atualizar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </form>
    </>
  );
};
