import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography} from '@mui/material';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import { display } from '@mui/system';

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
    }
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexGrow: 1,
          maxHeight: '100%'
        }}
      >
        <img 
          src='static/logoCondominium.jpeg'
          style={{maxWidth: '50%'}}
        />
        <Container maxWidth="sm" >
          <Box sx={{ my: '50%' }}>
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
                  color="primary"
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
                  href="/register"
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
