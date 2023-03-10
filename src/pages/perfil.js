import { Box, Container, Grid, Typography } from '@mui/material';
import { FotoPerfil } from '../components/account/FotoPerfil';
import { DetalhesPerfil } from '../components/account/DetalhesPerfil';
import { DashboardLayout } from '../components/painel-layout';

const Page = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Perfil
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <FotoPerfil />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <DetalhesPerfil />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
