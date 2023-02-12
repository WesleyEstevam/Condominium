import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Divider, Link, TextField, Typography} from '@mui/material';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'demo@devias.io',
      password: 'Password123'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: () => {
      Router
        .push('/')
        .catch(console.error);
    },
  });
  return (
    <>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1,
          backgroundColor: '#FFFAFA',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Container maxWidth="sm">
          <img 
            src='static/logoCondominium.jpeg'
            style={{
              margin: 'auto',
              width: '282px',
              borderRadius: '200px'
            }}
          />
          <Typography variant="h5" 
            style={{
              fontFamily: "Poppins", 
              fontSize: '5vh',
              fontWeight: "300",
              textAlign: 'center',
              fontStyle: 'medium',

          }}>
            Bem vindo ao 
          </Typography>
          <Typography 
            style={{
              display:'flex',
              flexDirection:'row',
              justifyContent: 'flex-end',
              fontSize: '5vh',
              fontFamily: 'Poppins',
              fontStyle: 'thin',
              fontWeight: "50",
            }}

          >
            CONDOMINIUM
          </Typography>
          <Divider 
            sx={{
              display: 'flex',
              marginLeft: "auto",
              backgroundColor: 'orange',
              width: '100px',
              height: '7px',

            }}
          />
          <Box 
            sx={{ 
              my: '10%', 
              backgroundColor: '#ffffff',
              borderRadius: '15px', 
              p: '20px' 
            }}>
            <form onSubmit={formik.handleSubmit}>
              
              <TextField
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Endereço de Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
              />
              <TextField
                error={Boolean(formik.touched.password && formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Senha"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
              />
              <Box sx={{ py: 2 }}>
                <Button
                  color="success"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Entrar
                </Button>
              </Box>
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Não tem uma conta??
                {' '}
                <NextLink
                  href="/cadastro"
                >
                  <Link
                    to="/register"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: 'pointer'
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
};

export default Login;
