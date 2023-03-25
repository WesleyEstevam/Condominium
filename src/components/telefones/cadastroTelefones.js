import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

 export function NovoTelefone(props) {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const router = useRouter();

  function voltar() {
    router.back();
  }

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
                  label="DDD"
                  name="ddd"
                  onChange={handleChange}
                  required
                  value={values.phone}
                  variant="outlined"
                  helperText="EX: (85)"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <TextField
                  fullWidth
                  label="Número"
                  name="numero"
                  onChange={handleChange}
                  required
                  value={values.phone}
                  variant="outlined"
                  helperText="EX: 0 0000-0000"
                />
              </Grid>
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
              onClick={voltar}
              color="success"
              variant="contained"
            >
              Cadastrar
            </Button>
          </Box>
        </Card>
      </form>
  );
};