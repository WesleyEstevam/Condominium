import {
  Box,
  Button,
  Container,
  Divider,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { baseURL } from "../components/api/api";
import { useRouter } from "next/router";
import axios from "axios";
import NextLink from "next/link";
import { erroLogin } from "../components/btn_acao/alertas";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const values = {
    username,
    password,
  };
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(baseURL + "login", values);
      const token = response.data;

      // Converte o objeto do token em uma string
      const tokenString = JSON.stringify(token);

      // Armazena o token JWT no localStorage ou em um cookie para autenticar as solicitações subsequentes.
      localStorage.setItem("token", tokenString);
      router.push("/");
    } catch (error) {
      erroLogin();
      console.error("Problema ao realizar a autenticação:", error);
    }
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#FFFAFA",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <img
            src="static/logoCondominium.jpeg"
            style={{
              margin: "10px",
              width: "200px",
              borderRadius: "10px",
            }}
          />
          <Typography
            variant="h5"
            style={{
              fontFamily: "Poppins",
              fontSize: "5vh",
              fontWeight: "300",
              textAlign: "center",
              fontStyle: "medium",
            }}
          >
            Bem vindo ao
          </Typography>
          <Typography
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              fontSize: "5vh",
              fontFamily: "Poppins",
              fontStyle: "thin",
              fontWeight: "50",
            }}
          >
            CONDOMINIUM
          </Typography>
          <Divider
            sx={{
              display: "flex",
              marginLeft: "auto",
              backgroundColor: "orange",
              width: "100px",
              height: "7px",
            }}
          />
          <Box
            sx={{
              my: "10%",
              backgroundColor: "#ffffff",
              borderRadius: "15px",
              p: "20px",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
                //error={Boolean(email && errors.email)}
                fullWidth
                //helperText={email && errors.email}
                label="Nome de usuário"
                margin="normal"
                name="username"
                //onBlur={handleBlur}
                onChange={(event) => setUsername(event.target.value)}
                type="email"
                //value={values.email}
                variant="outlined"
              />
              <TextField
                //error={Boolean(password && errors.password)}
                fullWidth
                //helperText={password && errors.password}
                label="password"
                margin="normal"
                name="password"
                //onBlur={handleBlur}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                //value={values.password}
                variant="outlined"
              />
              <Box sx={{ py: 2 }}>
                <Button
                  color="success"
                  //disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Entrar
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body2">
                Não tem uma conta??{" "}
                <NextLink href="/cadastro">
                  <Link
                    to="/register"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: "pointer",
                    }}
                  >
                    Cadastrar-se
                  </Link>
                </NextLink>
              </Typography>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Login;
